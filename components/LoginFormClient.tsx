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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("email")}
          placeholder="Email"
          type="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginFormClient;