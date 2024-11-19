import PasswordResetFormClient from "@/components/authsection/PasswordResetFormClient";

const PasswordReset = () => {
    return (
      <div className='w-full flex flex-col justify-center items-center gap-4 px-5'>
        <h1 className="text-white text-3xl font-bold">Password reset</h1>
        <p className='text-white text-center '>Enter your new password below</p>
        <PasswordResetFormClient/>
      </div>
    )
  }

export default PasswordReset;