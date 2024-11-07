import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-center gap-16 items-center min-h-screen  w-full bg-[#1D2E28]">
      <Link href={"/"}>
        <Image src='/assets/icons/logos.svg' alt="logo" width={200} height={100} />
      </Link>
      {children}
    </main>
  );
}
