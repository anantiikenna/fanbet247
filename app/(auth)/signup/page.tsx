import SignupFormClient from "@/components/SignupFormClient";
import Link from "next/link";

const Signup = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <h1 className="text-white text-3xl font-bold">Sign Up</h1>
      <SignupFormClient />
      <p className="text-white text-sm">Aready a member? <Link href="/login" className="text-[#84CC16]">Login</Link></p>
    </div>
  );
};


export default Signup;
