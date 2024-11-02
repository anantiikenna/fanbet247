
"use client"
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { z } from 'zod';
import { BetFormValidation } from '@/lib/validation';
import { useForm } from 'react-hook-form';

interface BetFormProps {
  fixtureId: string;
  leagueName: string;
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  odds: number;
}

const BetForm: React.FC<BetFormProps> = ({ fixtureId, leagueName, homeTeam, awayTeam, odds }) => {
  if (!fixtureId) throw new Error('Fixture ID is required');

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof BetFormValidation>>({
    resolver: zodResolver(BetFormValidation),
  });

  const onSubmit = (data: z.infer<typeof BetFormValidation>) => {
    console.log('Bet Data:', data);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild className='self-center w-full'>
        <Button variant="default" className="bg-[#085D37] text-white font-bold px-10 w-full">Bet</Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerTitle as="h2" className="text-2xl font-bold">{leagueName}</DrawerTitle>
        <div className="flex justify-between items-center mt-4">
          <Image src={homeTeam.logo} alt={`${homeTeam.name} logo`} width={50} height={50} />
          <span className="text-xl font-semibold">{homeTeam.name}</span>
          <span>vs</span>
          <span className="text-xl font-semibold">{awayTeam.name}</span>
          <Image src={awayTeam.logo} alt={`${awayTeam.name} logo`} width={50} height={50} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label>Enter Stake (Amount):</label>
            <input
              type="number"
              className="input"
              {...register('stake', { required: 'Stake amount is required' })}
            />
            {errors.stake && <span className="text-red-500">{errors.stake.message}</span>}
          </div>
          <div>
            <label>Bet Option:</label>
            <select {...register('betOption')} className="input">
              <option value="Half Time">Half Time</option>
              <option value="Full Time">Full Time</option>
            </select>
            {errors.betOption && <span className="text-red-500">{errors.betOption.message}</span>}
          </div>
          <div>
            <label>Offering:</label>
            <select {...register('offering')} className="input">
              <option value="Home Win">Home Win</option>
              <option value="Away Win">Away Win</option>
            </select>
            {errors.offering && <span className="text-red-500">{errors.offering.message}</span>}
          </div>
          <p className="mt-2">Odds: {odds}</p>
          <Button type="submit" variant="secondary" className="w-full mt-4">Create Challenge</Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default BetForm;
