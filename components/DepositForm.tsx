'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { depositFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import Image from "next/image";

const DepositForm = () => {
  const form = useForm<DepositFormValues>({
    resolver: zodResolver(depositFormSchema),
  });

  const onSubmit = async (data: DepositFormValues) => {
    try {
      console.log("Deposit data submitted:", data);
      alert("Deposit request submitted successfully!");
    } catch (error) {
      console.error("Error processing deposit:", error);
      alert("An error occurred while processing your deposit.");
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 w-full flex flex-col items-start gap-4 px-[5%]">
          <div className="flex flex-col border-b pb-4 border-[#E4E7EC] w-full">
            <h1 className="text-lg font-semibold">Deposit</h1>
            <p className="text-[#475467]">Make your deposit request here.</p>
          </div>

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

          {/* Toggle Group for Bank Selection */}
          <FormField
            control={form.control}
            name="bank"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Bank</FormLabel>
                <FormControl>
                  <ToggleGroup type="single" value={field.value} onValueChange={field.onChange} className="flex flex-col gap-4 w-full">
                    <ToggleGroupItem value="flutterwave" className="w-full flex justify-between items-center border rounded-lg"><div className="flex justify-between items-center gap-3"><Image src="/assets/icons/flutterwave.svg" alt="flutterwave" width={30} height={30}/>Flutterwave</div> <Image src="/assets/icons/right.svg" alt="flutterwave" width={20} height={30}/></ToggleGroupItem>
                    <ToggleGroupItem value="paystack" className="w-full flex justify-between items-center border rounded-lg"><div className="flex justify-between items-center gap-3"><Image src="/assets/icons/paystack.svg" alt="paystack" width={30} height={30}/>Paystack</div> <Image src="/assets/icons/right.svg" alt="paystack" width={20} height={30}/></ToggleGroupItem>
                    <ToggleGroupItem value="quickteller" className="w-full flex justify-between items-center border rounded-lg"><div className="flex justify-between items-center gap-3"><Image src="/assets/icons/quickteller.svg" alt="quickteller" width={30} height={30}/>Quickteller</div> <Image src="/assets/icons/right.svg" alt="quickteller" width={20} height={30}/></ToggleGroupItem>
                    <ToggleGroupItem value="bank" className="w-full flex justify-between items-center border rounded-lg"><div className="flex justify-between items-center gap-3"><Image src="/assets/icons/bank.svg" alt="bank" width={30} height={30}/>Bank Transfer</div> <Image src="/assets/icons/right.svg" alt="bank" width={20} height={30}/></ToggleGroupItem>
                  </ToggleGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          {/* Buttons */}
          <div className="md:grid md:grid-cols-4 flex justify-start gap-10 items-center w-full">
            <Button type="button" onClick={() => form.reset()} className="w-full md:col-start-2 col-span-1 bg-gray-300 text-black">Cancel</Button>
            <Button type="submit" className="w-full md:col-span-1 bg-[#085D37] text-white">Deposit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DepositForm;
