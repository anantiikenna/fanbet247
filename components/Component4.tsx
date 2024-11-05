import React from 'react'

const Component4 = () => {
    return (
        <div className='grid grid-cols-4 col-span-4'>
          <div className='col-span-2 md:col-span-2 flex gap-1'>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>HT</p><p className='hidden md:flex'>Half Time</p></span>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>FT</p><p className='hidden md:flex'>Full Time</p></span>
          </div>
          <div className='col-span-2 md:col-span-2 flex gap-1'>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>H</p><p className='hidden md:flex'>Home</p></span>
            <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>A</p><p className='hidden md:flex'>Away</p></span>
          </div> 
        </div>
      )
}

export default Component4