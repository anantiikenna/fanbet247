'use client';

import Image from "next/image";
import { navLinks, mtrendlingLinks } from "@/constant";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <section className="w-full flex flex-col py-5 gap-4 md:hidden bg-[#153E34]">
      <div className="flex md:hidden justify-start gap-2 w-full px-5 bg-[#153E34]">
        <DropdownMenu>
          <DropdownMenuTrigger className='border-none'>
            <Image
              src='/icons/hamburger.svg'
              width={50}
              height={50}
              alt="menu"
              className="w-[18px] h-[12px] cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="md:hidden flex flex-col w-[800px] text-white px-10 py-5 font-sans bg-[#153E34] border-none gap-5"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}`);
              return (
                <DropdownMenuLabel key={item.label} className={isActive && 'border-b-2 border-[#28FFBB]'}>
                  <Link 
                    href={item.route}
                    key={item.label}
                    className={` w-full font-noto-sans-display leading-normal text-lg ${isActive && ' text-[#28FFBB] border-b-2 border-[#28FFBB]'}`}
                  >
                    <p className={`text-16 font-semibold ${isActive && 'mb-[-5px] font-black'}`}>{item.label}</p>
                  </Link>
                </DropdownMenuLabel>
              )
            }
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/">
          <Image src='/icons/logo.svg' alt="logo" width={200} height={100} className="w-[101px] h-[23px]" />
        </Link>
      
      </div>
      <ul className='flex w-full justify-start gap-2 px-5'>
        {mtrendlingLinks.map((item) =>(
          <li key={item.label} className='flex flex-col gap-1'>
            <Image src={item.imgUrl} alt={item.label} width={20} height={20} className=' self-center w-[15px] h-[15px]' />
            <p className="text-[8px] text-white text-bold">{item.label}</p>
          </li>
          )
        )}
      </ul>
    </section>
  );
};

export default MobileNavbar;
