'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DatePickerWithRange } from "./date-picker"; // Date Picker Component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Type definition for Transaction Type
type TransactionType = 'credit' | 'debit';

// Interface for the form data
interface TransactionFormValues {
  transactionType: TransactionType;
  dateRange: { from: Date; to: Date };
}

// Interface for each transaction
interface Transaction {
  refId: string;
  transactionDate: string;
  type: TransactionType;
  amount: string;
  balance: string;
  status: string;
}

const TransactionForm = () => {
  const form = useForm<TransactionFormValues>();
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Array of transactions

  // Submit handler function
  const onSubmit = (data: TransactionFormValues) => {
    const newTransaction: Transaction = {
      refId: Math.random().toString(36).substring(7), // Random Ref ID for demonstration
      transactionDate: `${data.dateRange.from.toLocaleDateString()} - ${data.dateRange.to.toLocaleDateString()}`,
      type: data.transactionType,
      amount: `$${(Math.random() * 1000).toFixed(2)}`, // Placeholder amount
      balance: `$${(Math.random() * 5000).toFixed(2)}`, // Placeholder balance
      status: "Pending", // Placeholder status
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full flex flex-col items-start gap-4 px-[5%]">
          <div className="flex flex-col border-b border-[#E4E7EC] w-full">
            <h1 className="text-lg font-semibold">Transactions</h1>
            <p className="text-[#475467]">View your Transactions history here</p>
          </div>
          {/* Transaction Type Selection */}
          <FormField
            control={form.control}
            name="transactionType"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Transaction Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full md:col-span-3">
                      <SelectValue placeholder="Select transaction type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit">Credit</SelectItem>
                      <SelectItem value="debit">Debit</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date Range Picker */}
          <FormField
            control={form.control}
            name="dateRange"
            render={() => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Date Range</FormLabel>
                <FormControl>
                  <DatePickerWithRange />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="md:grid grid-cols-4 justify-start gap-10 items-center w-full">
            <Button type="submit" className="w-full col-start-2 col-span-1 bg-[#085D37] text-white">Submit</Button>
          </div>

        </form>
      </Form>

      {/* Transaction Table */}
      <div className="mt-8">
        <Table className="overflow-auto">
          <TableHeader>
            <TableRow className="grid grid-cols-8 w-full gap-1 text-xs ">
              <TableHead className="col-span-2 place-content-center">Ref ID</TableHead>
              <TableHead className="col-span-2 place-content-center">Transaction Date</TableHead>
              <TableHead className=" place-content-center">Type</TableHead>
              <TableHead className=" place-content-center">Amount</TableHead>
              <TableHead className=" place-content-center">Balance</TableHead>
              <TableHead className=" place-content-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index} className="grid grid-cols-8 w-full gap-1 text-xs ">
                <TableCell className="col-span-2 place-content-center">{transaction.refId}</TableCell>
                <TableCell className="col-span-2 place-content-center">{transaction.transactionDate}</TableCell>
                <TableCell className=" place-content-center">{transaction.type}</TableCell>
                <TableCell className=" place-content-center">{transaction.amount}</TableCell>
                <TableCell className=" place-content-center">{transaction.balance}</TableCell>
                <TableCell className=" place-content-center">{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionForm;
