"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { authService } from "@/lib/authService";

export default function ProfilePage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login if not authenticated
      router.push("/auth/login");
    } else if (user) {
      // Initialize form with current user data
      setFormData(prev => ({
        ...prev,
        displayName: user.displayName || "",
        email: user.email || ""
      }));
    }
  }, [user, loading, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Update profile information
      if (formData.displayName !== user?.displayName) {
        await authService.UpdateProfile({
          displayName: formData.displayName
        });
        
        toast({
          title: "Profile updated",
          description: "Your display name has been updated successfully.",
        });
      }

      // Change password if provided
      if (formData.newPassword) {
        if (formData.newPassword !== formData.confirmPassword) {
          toast({
            title: "Passwords don't match",
            description: "Your new password and confirmation do not match.",
            variant: "destructive",
          });
          return;
        }

        await authService.ChangePassword(formData.newPassword);
        
        toast({
          title: "Password updated",
          description: "Your password has been changed successfully.",
        });
        
        // Clear password fields after successful change
        setFormData(prev => ({
          ...prev,
          newPassword: "",
          confirmPassword: ""
        }));
      }
      
    } catch (error) {
      console.error("Profile update error:", error);
      toast({
        title: "Update failed",
        description: "There was a problem updating your profile. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          Back to Dashboard
        </Button>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Update your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  disabled
                  placeholder="Your email"
                />
                <p className="text-sm text-muted-foreground">
                  Email address cannot be changed. Please contact support for assistance.
                </p>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Change Password</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current password"
                  />
                </div>

                <div className="space-y-2 mt-4">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your new password"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving Changes..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
