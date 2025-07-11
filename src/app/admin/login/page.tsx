import { LoginForm } from "@/components/admin/login-form";
import ErrorMessage from "@/components/error-message";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login",
};

export default async function AdminLoginPage() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTitle="403"
        content="Libere o sistema de login usando ALLOW_LOGIN"
      />
    );
  }

  return <LoginForm />;
}
