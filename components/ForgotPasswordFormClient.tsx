'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { forgotPasswordSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";


const ForgotPasswordFormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission status

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
        setIsSubmitted(true); // Mark as successfully submitted
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
    // Display message or SVG upon successful form submission
    return (
      <div className="flex flex-col items-center mt-14">
        <p className="mt-4 text-center text-white">
          Please check your email, we send a link to reset your password
        </p>
        <Image src={'/assets/icons/send-email.svg'} alt='Sent mail' width={30} height={30} className="w-16 h-16 text-green-500" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14 w-full flex flex-col items-center gap-5 px-[25%]">
      <div className="w-[320px]">
        <p className="text-white">Email</p>
        <Input {...register("email")} placeholder="Enter your email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <Button type="submit" className="w-[320px] bg-[#085D37]">Continue</Button>
    </form>
  );
};

export default ForgotPasswordFormClient;
