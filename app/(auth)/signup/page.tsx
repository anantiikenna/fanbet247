import SignupFormClient from "@/components/SignupFormClient";

const Signup = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-white text-3xl font-bold">Sign Up</h1>
      <SignupFormClient />
    </div>
  );
};

export default Signup;
