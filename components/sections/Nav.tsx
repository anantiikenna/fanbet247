
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className=' hidden md:flex justify-between w-full items-center bg-[url(/images/background2.svg)] bg-no-repeat bg-cover py-6 md:p-4 lg:px-28 '>
      <Link href="/">
        <Image src='/icons/logo.svg' alt="logo" width={108} height={24} />
      </Link>
      <ul className="flex gap-10">
          {navLinks.map((item) => (
              <li key={item.label}>
                  <Link href={item.route} className='font-sans leading-normal text-lg text-white'>
                    {item.label}
                  </Link>
              </li>
          ))}
      </ul>
    </nav>
  )
}

export default Nav;