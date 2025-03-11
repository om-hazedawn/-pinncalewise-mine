"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { registerUser } from "@/lib/authService";
import { useRouter } from "next/navigation";

// Define form schema with validation following .NET conventions
const registerSchema = z.object({
  DisplayName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  Password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  ConfirmPassword: z.string(),
}).refine((data) => data.Password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"],
});

// Type for form values
type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  
  // Initialize form with react-hook-form
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      DisplayName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: RegisterFormValues) {
    setIsLoading(true);
    
    try {
      const user = await registerUser(
        values.Email, 
        values.Password,
        values.DisplayName
      );
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully.",
      });
      
      // Redirect to dashboard or home page
      router.push("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Create an account</h2>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="DisplayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="ConfirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Register"}
          </Button>
        </form>
      </Form>
      
      <div className="text-center">
        <Button variant="link" onClick={() => router.push("/auth/login")}>
          Already have an account? Log in
        </Button>
      </div>
    </div>
  );
}
