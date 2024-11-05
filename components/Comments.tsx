"use client"

import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import Image from 'next/image';

const Comments: React.FC<CommentsProps> = ({ fixtureId }) => {
  if (!fixtureId) throw new Error('Fixture ID is required');
  
  return (
    <Drawer>
      <DrawerTrigger asChild className='self-center'>
        <div className=" w-1/3 md:w-full cursor-pointer bg-transparent flex justify-center px-1 border p-2 md:p-2 rounded-lg border-black">
          <Image src={'/assets/icons/comment.svg'} alt="comment" width={35} height={35} className=' w-6' />
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full flex flex-col justify-center text-white bg-[#1D2E28]">
        <div className='flex flex-col justify-center items-center text-center mt-4 py-5'>
          <div className='w-16 bg-white py-1 mb-4 rounded-lg'/>
          <DrawerTitle className="col-span-5 text-2xl font-bold">Comments</DrawerTitle>
        </div>
        <div className='flex flex-col w-full gap-4 mt-3 h-[40vh] overflow-auto'>
          <div className="grid grid-cols-6 px-4 w-full items-center mt-2 md:px-8">
            <div className="col-span-5 text-xs md:text-lg flex gap-2 md:gap-5 font-semibold">
              <Image src='/assets/icons/Chelsea1.png' alt='avatar' width={30} height={30} className=' self-start'/>
              <div className='flex flex-col'>
                <p>Name</p>
                <span className=''>Lorem ipsum dolor sit amet consectetur. Diam mi augue nisl.</span>
              </div>
            </div>
            <div className='col-span-1 flex flex-col md:flex-row justify-end gap-2 items-end'>
              <Image src='/assets/icons/union.svg' alt='like' width={10} height={10} className='self-center md:w-4' />
              <span className='text-xs md:text-lg'>1k</span>
            </div>
          </div>

          <div className="grid grid-cols-6 px-4 w-full items-center mt-2 md:px-8">
            <div className="col-span-5 text-xs md:text-lg flex gap-2 md:gap-5 font-semibold">
              <Image src='/assets/icons/Chelsea1.png' alt='avatar' width={30} height={30} className=' self-start'/>
              <div className='flex flex-col'>
                <p>Name</p>
                <span className=''>Lorem ipsum dolor sit amet consectetur. Diam mi augue nisl.</span>
              </div>
            </div>
            <div className='col-span-1 flex flex-col md:flex-row justify-end gap-2 items-end'>
              <Image src='/assets/icons/union.svg' alt='like' width={10} height={10} className='self-center md:w-4' />
              <span className='text-xs md:text-lg'>1k</span>
            </div>
          </div>

          <div className="grid grid-cols-6 px-4 w-full items-center mt-2 md:px-8">
            <div className="col-span-5 text-xs md:text-lg flex gap-2 md:gap-5 font-semibold">
              <Image src='/assets/icons/Chelsea1.png' alt='avatar' width={30} height={30} className=' self-start'/>
              <div className='flex flex-col'>
                <p>Name</p>
                <span className=''>Lorem ipsum dolor sit amet consectetur. Diam mi augue nisl.</span>
              </div>
            </div>
            <div className='col-span-1 flex flex-col md:flex-row justify-end gap-2 items-end'>
              <Image src='/assets/icons/union.svg' alt='like' width={10} height={10} className='self-center md:w-4' />
              <span className='text-xs md:text-lg'>1k</span>
            </div>
          </div>

          <div className="grid grid-cols-6 px-4 w-full items-center mt-2 md:px-8">
            <div className="col-span-5 text-xs md:text-lg flex gap-2 md:gap-5 font-semibold">
              <Image src='/assets/icons/Chelsea1.png' alt='avatar' width={30} height={30} className=' self-start'/>
              <div className='flex flex-col'>
                <p>Name</p>
                <span className=''>Lorem ipsum dolor sit amet consectetur. Diam mi augue nisl.</span>
              </div>
            </div>
            <div className='col-span-1 flex flex-col md:flex-row justify-end gap-2 items-end'>
              <Image src='/assets/icons/union.svg' alt='like' width={10} height={10} className='self-center md:w-4' />
              <span className='text-xs md:text-lg'>1k</span>
            </div>
          </div>

          <div className="grid grid-cols-6 px-4 w-full items-center mt-2 md:px-8">
            <div className="col-span-5 text-xs md:text-lg flex gap-2 md:gap-5 font-semibold">
              <Image src='/assets/icons/Chelsea1.png' alt='avatar' width={30} height={30} className=' self-start'/>
              <div className='flex flex-col'>
                <p>Name</p>
                <span className=''>Lorem ipsum dolor sit amet consectetur. Diam mi augue nisl.</span>
              </div>
            </div>
            <div className='col-span-1 flex flex-col md:flex-row justify-end gap-2 items-end'>
              <Image src='/assets/icons/union.svg' alt='like' width={10} height={10} className='self-center md:w-4' />
              <span className='text-xs md:text-lg'>1k</span>
            </div>
          </div>
          
        </div>
        <div className="flex px-4 w-full justify-center items-center md:px-8">

          <div className="w-full text-xs md:text-lg flex items-center justify-center gap-4 md:gap-5 font-semibold">
            <Image src='/assets/icons/Chelsea1.png' alt='avatar' width={30} height={30} className='self-center w-12'/>
              <div className='w-full py-4'>
                <input
                  type="text"
                  placeholder="Add a comment for this match Number"
                  className=" px-10 self-start w-full bg-transparent py-5 text-white placeholder:text-[#737373] placeholder:text-center placeholder-white focus:outline-none border rounded-3xl border-white"
                />
              </div>
            </div>
            
          </div>
        <div>

        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Comments;
