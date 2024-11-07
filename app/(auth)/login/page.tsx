import LoginFormClient from "@/components/LoginFormClient"

const Login = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-white text-3xl font-bold">Login</h1>
      <LoginFormClient />
    </div>
  );
};

export default Login;
