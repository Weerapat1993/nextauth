
import { auth } from "@/auth";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import { MagicLinkForm } from "@/components/profile/magic-link";
import CustomCard from "@/components/common/Card";

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
        <div className="w-[300px]">
          <CustomCard title="Magic Link">
            <MagicLinkForm />
          </CustomCard>
        </div>
      </section>
    </>
  );
}
