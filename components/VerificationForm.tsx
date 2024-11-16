'use client'

import { Button } from "@/components/ui/button";
import { useDropzone } from 'react-dropzone';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { verificationFormSchema } from "@/lib/validation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useCallback } from "react";
import Image from "next/image";


const VerificationForm = () => {
  const form = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationFormSchema),
  });

  // State management for the uploaded document
  const [uploadedDocument, setUploadedDocument] = useState<UploadedImageProps | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDropDocument = useCallback((acceptedFiles: CustomFile[]) => {
    if (acceptedFiles.length > 0) {
      const fileData = acceptedFiles[0];
      setUploadedDocument(fileData);

      // Create a Blob and URL for previewing purposes
      const blob = new Blob([fileData], { type: fileData.type || 'application/pdf' });
      setPreview(URL.createObjectURL(blob));
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropDocument,
    accept: {
      'application/pdf': [],
      'image/jpeg': [],
      'image/png': [],
    },
    multiple: false,
    maxSize: 1024 * 1024 * 5, // Maximum size: 5MB
  });

  const onSubmit = async (data: VerificationFormValues) => {
    try {
      console.log("Verification data submitted:", data, { uploadedDocument });
      alert("Verification details submitted successfully!");
    } catch (error) {
      console.error("Error during verification submission:", error);
      alert("An error occurred while submitting your verification details.");
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full flex flex-col items-start gap-4 px-[5%]">

          {/* Document Type Selection */}
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Choose a document type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passport">Passport</SelectItem>
                      <SelectItem value="id_card">ID Card</SelectItem>
                      <SelectItem value="driver_license">Driver&apos;s License</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Document Upload */}
          <FormField
            control={form.control}
            name="uploadedDocument"
            render={() => (
              <FormItem className="grid grid-cols-5 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-bold col-span-2">Upload your document</FormLabel>
                <FormControl className="flex flex-col justify-center items-center w-full h-[200px] col-span-3 rounded-lg border-2 p-4">
                  <div {...getRootProps()} className="w-full h-full flex items-center justify-center cursor-pointer">
                    <input {...getInputProps()} />
                    {uploadedDocument ? (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        {preview && <Image src={preview} alt="Document Preview" width={250} height={200} />}
                        <p>{uploadedDocument.name}</p>
                      </div>
                    ) : (
                      <p className="text-center">Click here to upload or drag & drop your document</p>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* Fanbat247 Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">Enter your Fanbat247 password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="grid grid-cols-4 justify-start gap-10 items-center w-full">
            <Button type="submit" className="col-start-2 col-span-1 bg-[#085D37] text-white">Submit</Button>
          </div>

        </form>
      </Form>
    </div>
  );
};

export default VerificationForm;
