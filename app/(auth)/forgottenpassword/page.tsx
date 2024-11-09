import ForgotPasswordFormClient from '@/components/ForgotPasswordFormClient'

const Forgotten = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4 px-5'>
      <h1 className="text-white text-2xl md:text-3xl font-bold">Forgotten Password</h1>
      <p className='text-center text-white '>Enter your email address below to reset your password.</p>
      <ForgotPasswordFormClient/>
    </div>
  )
}

export default Forgotten