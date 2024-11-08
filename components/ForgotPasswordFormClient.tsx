'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPasswordFormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Password reset instructions have been sent to your email!");
      } else {
        const errorData = await response.json();
        alert(`Failed to reset password: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14 w-full flex flex-col items-center gap-5 px-[25%]">
      <div className="w-[320px]">
        <p className="text-white">Email</p>
        <Input {...register("email")} placeholder="Enter your email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <Button type="submit" className="w-[320px] bg-[#085D37]">Reset Password</Button>
    </form>
  );
};

export default ForgotPasswordFormClient;
