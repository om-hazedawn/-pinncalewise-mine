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
import { loginUser } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define form schema with validation following .NET conventions
const loginSchema = z.object({
  Email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  Password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// Type for form values
type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  
  // Initialize form with react-hook-form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: LoginFormValues) {
    setIsLoading(true);
    
    try {
      const result = await loginUser(values.Email, values.Password);
      
      if (result.success) {
        toast({
          title: "Login Successful",
          description: "You have been successfully logged in.",
        });
        
        // Redirect to dashboard
        router.push("/dashboard");
        router.refresh();
      } else {
        toast({
          title: "Login Failed",
          description: result.error || "Failed to log in. Please check your credentials.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Failed to log in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Log in to your account</h2>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to log in to your account
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <div className="text-right">
                  <Link href="/auth/reset-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </Form>
      
      <div className="text-center">
        <Link href="/auth/register" className="text-sm text-blue-600 hover:underline">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
}
