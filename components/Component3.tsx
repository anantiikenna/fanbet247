import React from 'react'

const Component3 = () => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-3 col-span-4 md:col-span-3'>
      <div className='col-span-2 md:col-span-1 flex gap-1'>
        <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>Home</p><p className='hidden md:flex'>Home</p></span>
        
      </div>
      <div className='col-span-2 md:col-span-1 flex gap-1'>
        <span className="bg-[#E5E5E5] px-1 md:px-3 py-1 self-center text-[#949799]"><p className='md:hidden'>Away</p><p className='hidden md:flex'>Away</p></span>
      </div> 
    </div>
  )
}

export default Component3