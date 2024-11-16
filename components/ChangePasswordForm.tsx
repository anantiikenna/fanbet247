'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "@/lib/validation";

const ChangePasswordForm = () => {
  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    try {
      console.log("Password change data submitted:", data);
      alert("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("An error occurred while changing your password.");
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full flex flex-col items-start gap-4 px-[5%]">
          <div className="flex flex-col border-b border-[#E4E7EC] w-full">
            <h1 className="text-lg font-semibold">Change Password</h1>
            <p className="text-[#475467]">Update your account password here</p>
          </div>

          {/* Current Password */}
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Current Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your current password" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">New Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter a new password" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm New Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirm your new password" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="grid grid-cols-4 justify-start gap-10 items-center w-full">
            <Button type="button" onClick={() => form.reset()} className="col-start-2 col-span-1 bg-gray-300 text-black">Cancel</Button>
            <Button type="submit" className="col-span-1 bg-[#085D37] text-white">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
