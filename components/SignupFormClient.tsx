'use client';

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



const SignupFormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(async () => {
      if (value) {
      const response = await fetch(`/api/check-username?username=${value}`);
      const data = await response.json();
      setIsUsernameAvailable(data.available);
      }
    }, 500);
  };

  const onSubmit = async (data: SignupFormValues) => {
    if (isUsernameAvailable === false) {
      alert("Username is taken. Please choose another one.");
      return;
    }

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Signup successful!");
    } else {
      const errorData = await response.json();
      alert(`Signup failed: ${errorData.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("username")}
          placeholder="Username"
          onChange={handleUsernameChange}
          type="text"
        />
        {isUsernameAvailable === false && (
          <p className="text-red-500">Username is already taken.</p>
        )}
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      </div>
      <div>
        <Input {...register("email")} placeholder="Email" type="email"/>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div>
        <Input {...register("confirmPassword")} type="password" placeholder="Confirm Password" />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupFormClient;
