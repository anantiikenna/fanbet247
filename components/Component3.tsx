import React from 'react'

const Component3 = () => {
    return (
        <div className='grid grid-cols-4 col-span-4'>
          <div className='col-span-2 md:col-span-2 flex gap-1'>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>BT</p><p className='hidden md:flex'>Bear Time</p></span>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>GT</p><p className='hidden md:flex'>Lose Time</p></span>
          </div>
          <div className='col-span-2 md:col-span-2 flex gap-1'>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>G</p><p className='hidden md:flex'>House</p></span>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>B</p><p className='hidden md:flex'>Club</p></span>
          </div> 
        </div>
      )
}

export default Component3