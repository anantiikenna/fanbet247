"use client"

import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
// import Image from 'next/image';
import { z } from 'zod';
import { BetFormValidation } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const BetForm: React.FC<BetFormProps> = ({ fixtureId, homeTeam, awayTeam, odds }) => {
  if (!fixtureId) throw new Error('Fixture ID is required');
  const [stake, setStake] = useState<number>(1000);

  // Set stake amount when button is clicked
  const handleAmountClick = (amount: number) => {
    setStake(amount);
  };

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
      <DrawerContent className="text-white bg-[#292929]">
        <div className='grid grid-cols-6 px-4 mt-3'>
          <DrawerTitle className="col-span-5 text-2xl font-bold">{homeTeam.name}</DrawerTitle>
          <div className="col-span-1">{odds}</div>
        </div>
        
        <div className="grid grid-cols-6 px-4 mt-2">
          <div className="col-span-3 text-xs flex gap-4 font-semibold">
            <span className="">{homeTeam.name}</span>
            <span className=''>vs</span>
            <span className="">{awayTeam.name}</span>
          </div>
          <div className="col-span-3 text-xs font-semibold"/>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-2 gap-5">
          <div className='grid grid-cols-6 px-4'>
            <label className="col-span-4 text-xs font-semibold">Time</label>
            <input
              type="number"
              className="col-span-2 text-xs font-semibold"
              {...register('stake', { required: 'Stake amount is required' })}
            />  
            {errors.stake && <span className="text-red-500">{errors.stake.message}</span>}
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
              className="text-black col-span-2 border px-1 py-1 "
              placeholder="Enter amount"
            />
          </div>
          <div className='bg-[#085D37] w-full flex'>
            <Button type="submit" className=" bg-transparent w-full text-sm font-bold">Create Challenge</Button>
          </div>
          
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default BetForm;



// "use client"
// import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
// import { Button } from '@/components/ui/button';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Image from 'next/image';
// import { z } from 'zod';
// import { BetFormValidation } from '@/lib/validation';
// import { useForm } from 'react-hook-form';

// interface BetFormProps {
//   fixtureId: number;
//   leagueName: string;
//   homeTeam: { name: string; logo: string };
//   awayTeam: { name: string; logo: string };
//   odds: number;
// }

// const BetForm: React.FC<BetFormProps> = ({ fixtureId, leagueName, homeTeam, awayTeam, odds }) => {
//   if (!fixtureId) throw new Error('Fixture ID is required');

//   const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof BetFormValidation>>({
//     resolver: zodResolver(BetFormValidation),
//   });

//   const onSubmit = (data: z.infer<typeof BetFormValidation>) => {
//     console.log('Bet Data:', data);
//   };

//   return (
//     <Drawer>
//       <DrawerTrigger asChild className='self-center w-full'>
//         <Button variant="default" className="bg-[#085D37] text-white font-bold px-10 w-full">Bet</Button>
//       </DrawerTrigger>
//       <DrawerContent className="bg-[#292929] p-6">
//         <div className='flex justify-between'>
//           <DrawerTitle className="text-2xl font-bold">{leagueName}</DrawerTitle>
//         </div>
        
//         <div className="flex justify-between items-center mt-4">
//           <Image src={homeTeam.logo} alt={`${homeTeam.name} logo`} width={50} height={50} />
//           <span className="text-xl font-semibold">{homeTeam.name}</span>
//           <span>vs</span>
//           <span className="text-xl font-semibold">{awayTeam.name}</span>
//           <Image src={awayTeam.logo} alt={`${awayTeam.name} logo`} width={50} height={50} />
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
//           <div>
//             <label>Enter Stake (Amount):</label>
//             <input
//               type="number"
//               className="input"
//               {...register('stake', { required: 'Stake amount is required' })}
//             />
//             {errors.stake && <span className="text-red-500">{errors.stake.message}</span>}
//           </div>
//           <div>
//             <label>Bet Option:</label>
//             <select {...register('betOption')} className="input">
//               <option value="Half Time">Half Time</option>
//               <option value="Full Time">Full Time</option>
//             </select>
//             {errors.betOption && <span className="text-red-500">{errors.betOption.message}</span>}
//           </div>
//           <div>
//             <label>Offering:</label>
//             <select {...register('offering')} className="input">
//               <option value="Home Win">Home Win</option>
//               <option value="Away Win">Away Win</option>
//             </select>
//             {errors.offering && <span className="text-red-500">{errors.offering.message}</span>}
//           </div>
//           <p className="mt-2">Odds: {odds}</p>
//           <Button type="submit" variant="secondary" className="w-full mt-4">Create Challenge</Button>
//         </form>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default BetForm;
