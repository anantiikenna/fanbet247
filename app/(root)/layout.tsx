import Footer from "@/components/sections/Footer";
import MobileNavbar from "@/components/sections/MobileNavbar";
import Nav from "@/components/sections/Nav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className=" bg-[#f3f7f6] p-0 m-0 antialiased h-screen ">
        <Nav/>
        <MobileNavbar/>
        {children}
        <Footer/>
      </main>
    );
  }
  