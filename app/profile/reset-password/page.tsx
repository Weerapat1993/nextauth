import { auth } from "@/auth";
import Header from "@/components/header";
import { EditProfile } from "@/components/profile/edit-profile";
import { PasswordResetForm } from "@/components/profile/password-reset-form";
import { redirect } from "next/navigation";

export default async function ProfileEditPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  const user = session?.user;
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20 flex justify-center">
        <PasswordResetForm />
      </section>
    </>
  );
}
