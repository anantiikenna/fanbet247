"use client"

import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BetFormSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';





const BetForm: React.FC<BetFormProps> = ({ fixtureId, homeTeam, awayTeam, odds }) => {
  if (!fixtureId) throw new Error('Fixture ID is required');
  const [stake, setStake] = useState<number>(1000);
  const [selectedFormat, setSelectedFormat] = useState<string | undefined>(undefined);

  
  // Set stake amount when button is clicked
  const handleAmountClick = (amount: number) => {
    setStake(amount);
  };

  const { handleSubmit } = useForm<z.infer<typeof BetFormSchema>>({
    resolver: zodResolver(BetFormSchema),
  });

  const onSubmit = (data: z.infer<typeof BetFormSchema>) => {
    console.log('Bet Data:', { ...data, format: selectedFormat });
  };

  const calculatePayout = (amount: number) => amount * 1.8;

  return (
    <Drawer>
      <DrawerTrigger asChild className='self-center w-full'>
        <Button variant="default" className="bg-[#085D37] text-white font-bold px-10 w-full">Bet</Button>
      </DrawerTrigger>
      <DrawerContent className="text-white bg-[#292929]">
        <div className='grid grid-cols-6 px-4 mt-3'>
          <DrawerTitle className="col-span-5 text-2xl font-bold">{homeTeam.name}</DrawerTitle>
          <div className="col-span-1">{odds}</div>
        </div>
        
        <div className="grid grid-cols-6 px-4 mt-2">
          <div className="col-span-4 text-xs flex gap-2 font-semibold">
            <span className="">{homeTeam.name}</span>
            <span className=''>vs</span>
            <span className="">{awayTeam.name}</span>
          </div>
          <div className="col-span-2 text-xs font-semibold"/>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4 gap-5 ">
          <div className='grid grid-cols-6 px-4'>
            <label className="self-center col-span-3 text-xs font-semibold">Time</label>
            <ToggleGroup
              size="sm"
              type="single"
              value={selectedFormat}
              onValueChange={(value) => setSelectedFormat(value)}
              className='col-span-3 flex justify-end '
            >
              <ToggleGroupItem value="Half Time" aria-label="Toggle halftime" className="text-xs text-[#737373] bg-white rounded-sm">
                <p>Half Time</p>
              </ToggleGroupItem>
              <ToggleGroupItem value="Full Time" aria-label="Toggle fulltime" className="text-xs text-[#737373] bg-white rounded-sm">
              <p>Full Time</p>
              </ToggleGroupItem>
            </ToggleGroup>  

          </div>
          <div className='grid grid-cols-6 text-xs px-4'>
            <h2 className="self-center col-span-1 text-xs font-bold">Stake</h2>
            <div className="col-span-3 flex gap-1">
              <button
                className=" self-center px-2 py-1 rounded bg-[#085D37]"
                onClick={() => handleAmountClick(1000)}
              >
                1000
              </button>
              <button
                className=" self-center px-2 py-1 rounded bg-[#085D37]"
                onClick={() => handleAmountClick(5000)}
              >
                5000
              </button>
              <button
                className=" self-center px-2 py-1 rounded bg-[#085D37]"
                onClick={() => handleAmountClick(10000)}
              >
                10000
              </button>
            </div>
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(Number(e.target.value))} // Convert to number
              className="text-black col-span-2 rounded border px-1 py-1 "
              placeholder="Enter amount"
            />
          </div>
          <div className='bg-[#085D37] w-full flex flex-col py-2'>
            <Button type="submit" className="py-0 bg-transparent w-full text-sm font-bold">Create Challenge</Button>
            <div className='flex justify-center gap-2 mt-[-7px] text-center'>
              <p className='font-bold text-xs'>Win: ₦{calculatePayout(stake).toFixed(2)}</p>
              <p className='font-bold text-xs'>Draw: ₦{calculatePayout(stake).toFixed(2)}</p>
              <p className='font-bold text-xs'>Lose: ₦{calculatePayout(stake).toFixed(2)}</p>
            </div>
          </div>
          
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default BetForm;


{/**
  "use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BetFormSchema } from '@/lib/validation';
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { z } from 'zod';

const BetForm: React.FC<BetFormProps> = ({ fixtureId, homeTeam, awayTeam, }) => {
  if (!fixtureId) throw new Error('Fixture ID is required');

  const [stake, setStake] = useState<number>(1000);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const { handleSubmit, register, formState: { errors } } = useForm<z.infer<typeof BetFormValidation>>({
    resolver: zodResolver(BetFormSchema),
  });

  const onSubmit = (data: z.infer<typeof BetFormSchema>) => {
    console.log('Bet Data:', { ...data, selectedTeam, format: selectedFormat, stake });
  };

  const calculatePayout = (amount: number) => amount * 1.8;

  return (
    <Drawer>
      <DrawerTrigger asChild className="self-center w-full">
        <Button variant="default" className="bg-[#085D37] text-white font-bold px-10 w-full">Bet</Button>
      </DrawerTrigger>
      <DrawerContent className="text-white bg-[#292929]">
        <DrawerTitle className="text-2xl font-bold px-4">{homeTeam.name} vs {awayTeam.name}</DrawerTitle>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-4 px-4">
          <ToggleGroup
            size="sm"
            type="single"
            value={selectedFormat}
            onValueChange={(value) => setSelectedFormat(value)}
            className="flex gap-2"
          >
            <ToggleGroupItem value="Half Time" aria-label="Half Time" className="text-xs bg-white">
              Half Time
            </ToggleGroupItem>
            <ToggleGroupItem value="Full Time" aria-label="Full Time" className="text-xs bg-white">
              Full Time
            </ToggleGroupItem>
          </ToggleGroup>
          {errors.format && <span className="text-red-500">{errors.format.message}</span>}

          <div className="text-xs font-semibold">Select Team</div>
          <ToggleGroup
            size="sm"
            type="single"
            value={selectedTeam}
            onValueChange={(value) => setSelectedTeam(value)}
            className="flex gap-2"
          >
            <ToggleGroupItem value={homeTeam.name} aria-label="Home Team" className="text-xs bg-white">
              {homeTeam.name}
            </ToggleGroupItem>
            <ToggleGroupItem value={awayTeam.name} aria-label="Away Team" className="text-xs bg-white">
              {awayTeam.name}
            </ToggleGroupItem>
          </ToggleGroup>
          {errors.selectedTeam && <span className="text-red-500">{errors.selectedTeam.message}</span>}

          <div className="text-xs font-semibold">Stake</div>
          <div className="flex gap-2">
            {[1000, 5000, 10000].map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setStake(amount)}
                className="px-2 py-1 bg-[#085D37] rounded"
              >
                {amount}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={stake}
            onChange={(e) => setStake(Number(e.target.value))}
            placeholder="Enter amount"
            className="px-2 py-1 rounded border"
          />
          {errors.stake && <span className="text-red-500">{errors.stake.message}</span>}

          <Button type="submit" className="bg-[#085D37] text-white font-bold mt-4">Create Challenge</Button>
          
          <div className="text-xs text-center mt-2">
            <p>Win: ₦{calculatePayout(stake).toFixed(2)}</p>
            <p>Draw: ₦{calculatePayout(stake).toFixed(2)}</p>
            <p>Lose: ₦{calculatePayout(stake).toFixed(2)}</p>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default BetForm;

*/}