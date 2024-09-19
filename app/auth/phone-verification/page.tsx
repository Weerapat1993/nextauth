
import { auth } from "@/auth";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import TwoFactorAuthForm from "@/components/profile/two-factor-auth";

export default async function ProfileMagicLinkPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  const user = session?.user;
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20 flex justify-center">
        <div>
          <TwoFactorAuthForm />
        </div>
      </section>
    </>
  );
}
