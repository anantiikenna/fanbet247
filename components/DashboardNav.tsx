"use client"

import { dashboardLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <div className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#17392B] pt-10 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
      <ul className='flex flex-col justify-center gap-7 font-bold'>
        {dashboardLinks.map((item) => (
          <li key={item.label} className={pathname === item.route ? "border-b border-[#6CC89F]" : ""}>
            <Link href={item.route} className={pathname === item.route ?"text-[#6CC89F]":"text-white"}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-2 text-[#D4D4D4] font-bold'>
        <Image src={'/assets/icons/logout.svg'} alt='logout' width={30} height={30} />
        <p>Logout</p>
      </div>
    </div>
  )
}

export default DashboardNav;
