"use client"

import { authLinks, navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className=' hidden md:flex justify-between w-full items-center bg-[url(/assets/images/background2.svg)] bg-no-repeat bg-cover py-6 md:p-4 lg:px-28 '>
      <Link href="/" className='flex items-center'>
        <Image src='/assets/icons/logo.svg' alt="logo" width={108} height={24} />
      </Link>
      <ul className="flex justify-between items-center gap-5">
        {navLinks.map((item) => (
          <li key={item.label} className={item.route === pathname ? 'rounded-xl border-2 px-2 py-1 border-[#085D37]':' border-2 border-transparent px-2 py-1 '}>
            <Link href={item.route} className='font-sans leading-normal text-base text-white'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-2 items-center">
        <li className={authLinks.login === pathname ? 'rounded-xl border-2 px-2 py-1 border-[#085D37]':' border-2 border-transparent px-2 py-1 '}>
          <Link href={authLinks.login} className='font-sans leading-normal text-base text-white'>
            Login
          </Link>
        </li>
        <li className={authLinks.signup === pathname ? 'rounded-xl border-2 px-2 py-1 border-[#085D37]':' border-2 border-transparent px-2 py-1 '}>
          <Link href={authLinks.signup} className='font-sans leading-normal text-base text-white'>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
