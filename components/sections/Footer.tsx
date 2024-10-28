"use client"

import Image from 'next/image';

const Footer = () => {
  return (
    <div className='relative bottom-0 no-scrollbar flex flex-col items-center gap-8 justify-between bg-[#0e0e0e] w-full px-10 py-10'>
      <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between items-center w-full'>
        <div className='flex flex-col  sm:flex-row justify-between items-center gap-4 w-full md:w-1/2'>
          <Image src="/icons/shortLogo2.svg" alt='logo' width={150} height={150}/>
          <p className='text-[#555556] '>BetZillion is the world’s leading independent online gaming authority, providing trusted betting news, guides and reviews since 2020.</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 w-full md:w-1/2'>
          <Image src="/icons/partners.svg" alt='' width={250} height={250}/>
          <Image src="/icons/partner2.svg" alt='' width={250} height={250}/>
        </div>
        
      </div>
      <div className='flex flex-row justify-center items-center gap-4 w-full '>
        <div className='flex flex-row justify-center items-center gap-4 w-full'>
          <p className='text-[#555556]'>2020 © BETZILLION. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
