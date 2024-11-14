
import LoginFormClient from "@/components/LoginFormClient";
import Link from "next/link";

const Login = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4 px-5`'>
      <h1 className="text-white text-3xl font-bold">Login</h1>
      <LoginFormClient />
      <p className="text-white text-center text-sm"><Link href="/forgottenpassword" className="text-[#84CC16]">Forgotten your Password?</Link></p>
      <p className="text-white text-center text-sm">Don&apos;t have an account <Link href="/signup" className="text-[#84CC16]">SignUp</Link></p>
    </div>
  );
};

export default Login;
