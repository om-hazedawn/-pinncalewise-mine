import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-6 shadow-md">
        <RegisterForm />
      </div>
    </div>
  );
}
