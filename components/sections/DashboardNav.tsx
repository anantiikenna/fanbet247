"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { dashboardLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardNav = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();
  return (
    <Sidebar {...props} className=' left-0 top-0 flex flex-col justify-between bg-[#17392B] px-5 text-white max-md:hidden p'>
      <SidebarHeader className="bg-[#17392B] ml-[-8px] pb-10 ">
        <Image src={'/assets/icons/logo.svg'} alt="logo" width={120} height={100} />
      </SidebarHeader> 
      <SidebarContent className="bg-[#17392B] no-scrollbar">
          <ul className='flex flex-col justify-center gap-7 font-bold'>
            {dashboardLinks.map((item) => (
              <li key={item.label} className={pathname === item.route ? "border-b border-[#6CC89F]" : ""}>
                <Link href={item.route} className={pathname === item.route ?"text-[#6CC89F]":"text-white"}>{item.label}</Link>
              </li>
            ))}
          </ul>       
      </SidebarContent>
      <SidebarFooter className='flex flex-row items-center gap-2 text-[#D4D4D4] font-bold bg-[#17392B]'>
            <Image src={'/assets/icons/logout.svg'} alt='logout' width={30} height={30} />
            <p>Logout</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default DashboardNav;