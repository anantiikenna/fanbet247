'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DatePickerWithRange } from "./date-picker"; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const BetHistoryForm = () => {
  const form = useForm<BetHistoryFormValues>();
  const [betHistory, setBetHistory] = useState<Bet[]>([]);

  // Submit handler function
  const onSubmit = (data: BetHistoryFormValues) => {
    const newBet: Bet = {
      refId: Math.random().toString(36).substring(7),
      betDate: `${data.dateRange.from.toLocaleDateString()} - ${data.dateRange.to.toLocaleDateString()}`,
      betType: data.betType,
      stake: `$${(Math.random() * 100).toFixed(2)}`,
      fixture: data.fixture,
      status: "Pending",
    };
    setBetHistory((prev) => [...prev, newBet]);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 w-full flex flex-col items-start gap-4 px-[5%]">
          <div className="flex flex-col pb-4 border-b border-[#E4E7EC] w-full">
            <h1 className="text-lg font-semibold">Bet History</h1>
            <p className="text-[#475467]">View your Bet History here.</p>
          </div>

          {/* Bet Status Toggle */}
          <FormField
            control={form.control}
            name="betStatus"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-start pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Bet Status</FormLabel>
                <FormControl>
                  <ToggleGroup type="single" value={field.value} onValueChange={field.onChange} className="col-span-3 flex gap-4 w-full">
                    <ToggleGroupItem value="openbets" className="w-full flex justify-center items-center border rounded-lg">Open Bets</ToggleGroupItem>
                    <ToggleGroupItem value="settledbets" className="w-full flex justify-center items-center border rounded-lg">Settled Bets</ToggleGroupItem>
                  </ToggleGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Bet Type Selection */}
          <FormField
            control={form.control}
            name="betType"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Bet Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full md:col-span-3">
                      <SelectValue placeholder="Select bet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="multiple">Multiple</SelectItem>
                      <SelectItem value="system">System</SelectItem>
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

      {/* Bet History Table */}
      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow className="w-full grid grid-cols-11 gap-4 text-xs text-s overflow-hidden overflow-x-scroll">
              <TableHead className="text-left col-span-2">Ref_ID</TableHead>
              <TableHead className="text-left col-span-3">Fixture</TableHead>
              <TableHead className="text-left col-span-3 w-full flex ">Bet Date</TableHead>
              <TableHead className="text-left col-span-1">Type</TableHead>
              <TableHead className="text-left col-span-1">Stake</TableHead>             
              <TableHead className="text-left col-span-1">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {betHistory.map((bet, index) => (
              <TableRow key={index} className="grid grid-cols-11 text-xs overflow-scroll">
                <TableCell className="text-left col-span-2">{bet.refId}</TableCell>
                <TableCell className="text-left col-span-3">{bet.fixture}</TableCell>
                <TableCell className="text-left col-span-3">{bet.betDate}</TableCell>
                <TableCell className="text-left col-span-1">{bet.betType}</TableCell>
                <TableCell className="text-left col-span-1">{bet.stake}</TableCell>
                <TableCell className="text-left col-span-1">{bet.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BetHistoryForm;
