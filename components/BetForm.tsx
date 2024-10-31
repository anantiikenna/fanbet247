// components/BetForm.tsx

import { Drawer, DrawerTrigger, DrawerContent } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { formatMatchTime } from '@/lib/utils';
import { z } from 'zod';
import { BetFormValidation } from '@/lib/validation';



const BetForm: React.FC<BetFormProps> = ({ fixtureId, leagueName, homeTeam, awayTeam, odds }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(BetFormValidation),
  });

  const onSubmit = (data: z.infer<typeof BetFormValidation>) => {
    console.log('Bet Data:', data);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default">Bet</Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <h2 className="text-2xl font-bold">{leagueName}</h2>
        <div className="flex justify-between items-center mt-4">
          <Image src={homeTeam.logo} alt={homeTeam.name} width={50} height={50} />
          <span className="text-xl font-semibold">{homeTeam.name}</span>
          <span>vs</span>
          <span className="text-xl font-semibold">{awayTeam.name}</span>
          <Image src={awayTeam.logo} alt={awayTeam.name} width={50} height={50} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label>Enter Stake (Amount):</label>
            <input
              type="number"
              className="input"
              {...register('stake', { required: true })}
            />
            {errors.stake && <span className="text-red-500">{errors.stake.message}</span>}
          </div>
          <div>
            <label>Bet Option:</label>
            <select {...register('betOption')} className="input">
              <option value="Half Time">Half Time</option>
              <option value="Full Time">Full Time</option>
            </select>
          </div>
          <div>
            <label>Offering:</label>
            <select {...register('offering')} className="input">
              <option value="Home Win">Home Win</option>
              <option value="Away Win">Away Win</option>
            </select>
          </div>
          <p className="mt-2">Odds: {odds}</p>
          <Button type="submit" variant="secondary" className="w-full mt-4">Create Challenge</Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default BetForm;
