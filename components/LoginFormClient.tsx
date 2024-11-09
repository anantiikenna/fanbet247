'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginFormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Login successful!");
      // Add additional logic for redirecting or saving session data if needed
    } else {
      const errorData = await response.json();
      alert(`Login failed: ${errorData.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mt-14 w-full flex flex-col items-center gap-5">
      <div className="w-full md:w-[320px]">
        <p className="text-white text-sm">Email</p>
        <Input
          {...register("email")}
          placeholder="email@address.com"
          type="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="w-full md:w-[320px]">
        <p className="text-white text-sm">Password</p>
        <Input
          {...register("password")}
          placeholder="Enter your password"
          type="password"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <Button type="submit" className="w-full md:w-[320px] bg-[#085D37]">Login</Button>
    </form>
  );
};

export default LoginFormClient;