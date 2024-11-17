'use client'

import { Button } from "@/components/ui/button";
import { useDropzone } from 'react-dropzone';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import { profileFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Image from "next/image";

const ProfileForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
  });
  
  // State management for profile image using generic object array and preview string
  const [uploadedImages, setUploadedImages] = useState<UploadedImageProps | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDropProfileImage = useCallback((acceptedFiles: CustomFile[]) => {
    if (acceptedFiles.length > 0) {
      const fileData = acceptedFiles[0];
      setUploadedImages(fileData);
  
      // Convert `CustomFile` to `Blob` safely
      const blob = new Blob([fileData], { type: fileData.type || 'image/png' });
      setPreview(URL.createObjectURL(blob));
    }
  }, []);
  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropProfileImage,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
      'image/svg': []
    },
    multiple: false,
    maxSize: 1024 * 1024, // Maximum size: 1MB
  });

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      console.log("Profile data submitted:", data, { uploadedImages });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile.");
    }
  };

  const handleCancel = () => {
    form.reset();
    setUploadedImages(null);
    setPreview(null);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full flex flex-col items-start gap-4 px-[5%]">
          <div className="flex flex-col border-b border-[#E4E7EC] w-full">
            <h1 className="text-lg font-semibold">My profile</h1>
            <p className="text-[#475467]">Update your photo and personal details here</p>
          </div>

          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center w-full">
                <FormLabel className="font-semibold text-sm col-span-1">First name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your name" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Surname */}
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-semibold">Surname</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your surname" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} className="col-span-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="md:grid grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-bold">Gender</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger  className="col-span-2" >
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Profile Image Upload using Dropzone */}
          <FormField
            control={form.control}
            name="profileImage"
            render={() => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-bold col-span-1">Your photo</FormLabel>
                <FormControl className="flex flex-col justify-center items-center w-full h-[250px] col-span-3 rounded-lg border-2 p-4">
                  <div {...getRootProps()} className="w-full h-full flex items-center justify-center cursor-pointer">
                    <input {...getInputProps()} />
                    {uploadedImages ? (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        {/* Conditionally Render Preview */}
                        {preview && (
                          <div className="place-items-center">
                            <Image src={preview} alt="Profile Preview" width={250} height={230} className="rounded-md" />
                          </div>
                        )}
                        <p>{uploadedImages.name}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <Image src={'assets/icons/upload.svg'} alt="upload" width={50} height={50} />
                        <p><span className="text-[#6941C6]">Click here to upload</span> or Drag & drop a profile image here</p>
                      </div>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* Date of Birth */}
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-bold">Date of Birth</FormLabel>
                <FormControl  className="col-span-2" >
                  <Input type="date" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />          

          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="md:grid md:grid-cols-4 justify-start gap-10 items-center pb-5 border-b border-[#E4E7EC] w-full">
                <FormLabel className="font-bold">Country</FormLabel>
                <FormControl  className="" >
                  <Select onValueChange={field.onChange} defaultValue={field.value} >
                    <SelectTrigger  className="col-span-2" >
                      <SelectValue placeholder="Select your country" className='w-full' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      {/* Add more options as needed */}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="md:grid md:grid-cols-4 flex justify-start gap-10 items-center w-full">
            <Button type="button" onClick={handleCancel} className="w-full col-start-2 col-span-1 bg-gray-300 text-black">Cancel</Button>
            <Button type="submit" className="w-full col-span-1 bg-[#085D37] text-white">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
