'use client';

import Image from "next/image";
import { navLinks } from "@/constant";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <section className="w-full">
      <div className="flex md:hidden justify-between w-full px-10 bg-[#000]">
        <Link href="/">
          <Image src='/icons/shortLogo.svg' alt="logo" width={100} height={100} />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src='/icons/hamburger.svg'
              width={50}
              height={50}
              alt="menu"
              className="cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="md:hidden left-[-0px] w-[800px] px-10 py-5 font-sans bg-[#fff] border-none"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
              return (
                <DropdownMenuLabel key={item.label}>
                  <Link 
                    href={item.route} 
                    key={item.label}
                    className={`font-noto-sans-display leading-normal text-lg text-black ${isActive && 'bg-bank-gradient'}`}
                  >
                    <p className={`text-16 font-semibold text-black-2 ${isActive && ' font-black italic'}`}>{item.label}</p>
                  </Link>
                </DropdownMenuLabel>
              )
            }
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default MobileNavbar;
