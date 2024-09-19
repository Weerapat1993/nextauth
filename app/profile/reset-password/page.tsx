// import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { auth } from "@/auth";
import Header from "@/components/header";
import { PasswordResetForm } from "@/components/profile/password-reset-form";
import { redirect } from "next/navigation";

export default async function ProfileEditPage() {
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
        {/* <div className="max-w-2xl mx-auto p-6 bg-ct-dark-100 rounded-md h-[20rem]"> */}
          {/* <ResetPasswordForm /> */}
          <PasswordResetForm initialState={initialState} />
        {/* </div> */}
      </section>
    </>
  );
}
