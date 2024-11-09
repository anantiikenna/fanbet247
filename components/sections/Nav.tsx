"use client"

import { authLinks, navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className=' hidden md:flex justify-between w-full items-center bg-[url(/assets/images/background2.svg)] bg-no-repeat bg-cover   lg:px-28 '>
      <Link href="/" className='flex items-center'>
        <Image src='/assets/icons/logo.svg' alt="logo" width={108} height={24} />
      </Link>
      <ul className="flex justify-between items-center gap-5">
        {navLinks.map((item) => (
          <li key={item.label} className={item.route === pathname ? ' border-b-2 px-2 py-5 border-[#6CC89F]':' border-2 border-transparent px-2 py-4 '}>
            <Link href={item.route} className={item.route === pathname ? 'font-sans leading-normal font-bold text-base text-[#6CC89F]':'font-sans leading-normal font-bold text-base text-white'}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-2 items-center">
        <li className={authLinks.login === pathname ? 'border-b-2 px-2 py-4 border-[#6CC89F]':' border-2 border-transparent px-2 py-4 '}>
          <Link href={authLinks.login} className={authLinks.login === pathname ? 'font-sans leading-normal font-bold text-base text-[#6CC89F]':'font-sans leading-normal font-bold text-base text-white'}>
            Login
          </Link>
        </li>
        <li className={authLinks.signup === pathname ? 'border-b-2 px-2 py-4 border-[#6CC89F]':' border-2 border-transparent px-2 py-4 '}>
          <Link href={authLinks.signup} className={authLinks.signup === pathname ? 'font-sans leading-normal font-bold text-base text-[#6CC89F]':'font-sans leading-normal font-bold text-base text-white'}>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
