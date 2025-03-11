"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { authService } from "@/lib/authService";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Call Firebase reset password function
      const response = await authService.ResetPassword(email);
      
      if (response.Success) {
        setIsSuccess(true);
        toast({
          title: "Password reset email sent",
          description: "Please check your email to reset your password.",
        });
      } else {
        toast({
          title: "Reset failed",
          description: response.Message || "There was a problem sending the reset email. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      toast({
        title: "Reset failed",
        description: "There was a problem sending the reset email. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {isSuccess ? (
            <div className="text-center space-y-4">
              <p className="text-green-600 font-medium">
                Reset email sent! Please check your inbox.
              </p>
              <p className="text-sm text-muted-foreground">
                If you don't see the email, check your spam folder or try again.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <div className="text-sm text-center">
            <Link 
              href="/auth/login"
              className="text-primary underline underline-offset-4 hover:text-primary/90"
            >
              Back to Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
