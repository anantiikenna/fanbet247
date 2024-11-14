'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { passwordResetSchema } from "@/lib/validation";
import Image from "next/image";


const PasswordResetFormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordResetFormValues>({
    resolver: zodResolver(passwordResetSchema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: PasswordResetFormValues) => {
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Failed to reset password: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center mt-14 gap-5">
        
        <p className="text-center text-white">
          Your password has been successfully reset. Please check your email for confirmation.
        </p>
        <Image src={'/asset/icons/success-filled.svg'} alt="success" width={100} height={100} />
        <Button type="submit" className="w-[320px] bg-[#085D37]">Login</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14 w-full flex flex-col items-center gap-5">
      <div className="w-full md:w-[320px]">
        <p className="text-white">Email</p>
        <Input {...register("email")} placeholder="Enter your email" type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="w-full md:w-[320px]">
        <p className="text-white">New Password</p>
        <Input
          {...register("password")}
          type="password"
          placeholder="Enter new password"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div className="w-full md:w-[320px]">
        <p className="text-white">Confirm New Password</p>
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm new password"
        />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>
      <Button type="submit" className="w-full md:w-[320px] bg-[#085D37]">Reset Password</Button>
    </form>
  );
};

export default PasswordResetFormClient;
