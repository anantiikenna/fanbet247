"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { forgotPasswordSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Image from "next/image";

const ForgotPasswordFormClient = () => {
  const form = useForm<ForgotPasswordFormValues>({
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
      <div className="flex flex-col items-center mt-14 gap-5">
        <p className="mt-4 text-center text-white">
          Please check your email, we sent a link to reset your password
        </p>
        <Image src={'/assets/icons/send-email.svg'} alt='Sent mail' width={30} height={30} className="w-16 h-16 text-green-500" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-14 w-full flex flex-col items-center gap-5 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full md:w-[320px]">
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-[320px] bg-[#085D37]">Continue</Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordFormClient;
