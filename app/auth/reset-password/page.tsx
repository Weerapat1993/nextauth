import { auth } from "@/auth";
import Header from "@/components/header";
import { PasswordResetForm } from "@/components/profile/password-reset-form";
import { redirect } from "next/navigation";

export default async function ProfileResetPasswordPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  const user = session?.user;
  const initialState = {
    id: user.id,
    password: '',
    confirmPassword: '',
  }
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20 flex justify-center">
        <div>
          <PasswordResetForm initialState={initialState} />
        </div>
      </section>
    </>
  );
}
