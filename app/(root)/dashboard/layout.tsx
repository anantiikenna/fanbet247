import DashboardNav from "@/components/DashboardNav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className=" flex gap-5">
        <DashboardNav/>
        <div className="flex flex-col items-start bg-white w-full p-1">
          {children}
        </div>
      
      </main>
    );
  }
