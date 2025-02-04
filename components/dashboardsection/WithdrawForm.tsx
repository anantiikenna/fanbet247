'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { withdrawFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const WithdrawForm = () => {
  const form = useForm<WithdrawFormValues>({
    resolver: zodResolver(withdrawFormSchema),
  });

  const onSubmit = async (data: WithdrawFormValues) => {
    try {
      console.log("Withdrawal data submitted:", data);
      alert("Withdrawal request submitted successfully!");
    } catch (error) {
      console.error("Error processing withdrawal:", error);
      alert("An error occurred while processing your withdrawal.");
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 w-full flex flex-col items-start gap-4 px-[5%]">
          <div className="flex flex-col border-b pb-4 border-[#E4E7EC] w-full">
            <h1 className="text-lg font-semibold">Withdraw</h1>
            <p className="text-[#475467]">Make your withdrawal request here.</p>
          </div>
          {/* Repeat Withdrawal */}
          <FormField
            control={form.control}
            name="repeatWithDifferentAmount"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Repeat with another amount</FormLabel>
                <FormControl>
                <Input type="checkbox" checked={field.value} onChange={field.onChange} className="w-full col-span-3"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Amount</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter amount" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Recipient's Bank */}
          <FormField
            control={form.control}
            name="bank"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Recipient’s bank</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank1">Bank 1</SelectItem>
                      <SelectItem value="bank2">Bank 2</SelectItem>
                      <SelectItem value="bank3">Bank 3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Account Number */}
          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Recipient’s account number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter account number" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Recipient's Name */}
          <FormField
            control={form.control}
            name="recipientName"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Recipient’s name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter recipient's name" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Enter your Fanbat247 password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="md:grid md:grid-cols-4 flex justify-start gap-10 items-center w-full">
            <Button type="button" onClick={() => form.reset()} className="w-full md:col-start-2 col-span-1 bg-gray-300 text-black">Cancel</Button>
            <Button type="submit" className="w-full md:col-span-1 bg-[#085D37] text-white">Withdraw</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WithdrawForm;
