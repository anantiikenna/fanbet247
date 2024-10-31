"use client"

import { footerLinks } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className='bg-white py-6 px-28'>
        <ul className="flex gap-10 ">
            {footerLinks.map((item) => (
                <li key={item.label}>
                    <Link href={item.route} className='font-sans leading-normal text-lg'>
                      {item.label}
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    
      <div className='flex justify-between w-full items-center bg-[url(/images/background2.svg)] bg-no-repeat bg-cover py-6 px-4 lg:px-28 '>
        
        <Link href="/">
          <Image src='/icons/logo.svg' alt="logo" width={108} height={24} />
        </Link>
        <p className='text-white'>© 2024 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
