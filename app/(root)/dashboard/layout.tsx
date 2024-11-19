
import Breadcrumbs from "@/components/dashboardsection/Breadcrumbs";
import DashboardNav from "@/components/sections/DashboardNav";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { dashboardLinks2 } from "@/constants";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex gap-5">
        <SidebarProvider className="" >
      <DashboardNav />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumbs links={dashboardLinks2}/>
        </header>
        
          <div className="flex flex-col items-start bg-white w-full p-1">
            {children}
          </div>
      </SidebarInset>
    </SidebarProvider>
          
        
        
      
      </main>
    );
  }
