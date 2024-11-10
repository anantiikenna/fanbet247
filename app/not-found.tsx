
import Footer from '@/components/sections/Footer';
import MobileNavbar from '@/components/sections/MobileNavbar';
import Nav from '@/components/sections/Nav'
import React from 'react'

const NotFound= () => {
  
  return (
    <div className=' w-full'>
      <Nav/>
      <MobileNavbar/>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex justify-between gap-5 items-center'>
          <h1>404</h1>
          <div className='h-14 border-x border-yellow-200'/>
          <p>This page could not be found.</p>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default NotFound