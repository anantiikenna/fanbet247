'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const LoginFormClient = () => {
  const form = useForm<LoginFormValues>({
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-14 w-full flex flex-col items-center gap-5">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full md:w-[320px]">
              <FormLabel className="text-white text-sm">Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="email@address.com" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full md:w-[320px]">
              <FormLabel className="text-white text-sm">Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your password" type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full md:w-[320px] bg-[#085D37]">Login</Button>
      </form>
    </Form>
  );
};

export default LoginFormClient;
