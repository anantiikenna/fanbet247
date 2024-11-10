
import Footer from '@/components/sections/Footer';
import MobileNavbar from '@/components/sections/MobileNavbar';
import Nav from '@/components/sections/Nav'
import React from 'react'

const NotFound= () => {
  
  return (
    <div className=' w-full h-screen'>
      <Nav/>
      <MobileNavbar/>
      <div className='flex flex-col justify-center items-center h-3/5 '>
        <div className='flex justify-between gap-5 items-center '>
          <h1>404</h1>
          <div className='h-14 border-x border-yellow-200'/>
          <p>This page could not be found.</p>
        </div>

      </div>
      <div className='fixed bottom-0 w-full'>
        <Footer/>
      </div>
      
    </div>
  );
}

export default NotFound