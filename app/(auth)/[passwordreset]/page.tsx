import PasswordResetFormClient from "@/components/PasswordResetFormClient";

const PasswordReset = () => {
    return (
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <h1 className="text-white text-3xl font-bold">Password reset</h1>
        <p className='text-white '>Enter your new password below</p>
        <PasswordResetFormClient/>
      </div>
    )
  }

export default PasswordReset;