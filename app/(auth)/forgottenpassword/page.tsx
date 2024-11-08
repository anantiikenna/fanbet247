import ForgotPasswordFormClient from '@/components/ForgotPasswordFormClient'

const Forgotten = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <h1 className="text-white text-3xl font-bold">Password reset</h1>
      <p className='text-white '>Enter your email address below to reset your password.</p>
      <ForgotPasswordFormClient/>
    </div>
  )
}

export default Forgotten