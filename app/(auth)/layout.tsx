import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-center gap-10 items-center min-h-screen  w-full bg-[#1D2E28]">
      <Link href={"/"}>
        <Image src='/assets/icons/logos.svg' alt="logo" width={200} height={100} />
      </Link>
      {children}
      <div className="w-full flex justify-center gap-10 text-white">
        <Link href={'/termsandconditions'}><p>Terms and Conditions</p></Link>
        <Link href={'/privacy'}><p>Privacy</p></Link>
      </div>
    </main>
  );
}
