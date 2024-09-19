import { auth } from "@/auth";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  const user = session?.user;

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            <div className="flex items-center gap-8">
              <div>
                <Image
                  src={user?.image ? user.image : "/images/default.png"}
                  alt={`profile photo of ${user?.name}`}
                  width={90}
                  height={90}
                />
              </div>
              <div className="mt-8">
                <p className="mb-3">ID: {user?.id}</p>
                <p className="mb-3">Name: {user?.name}</p>
                <p className="mb-3">Email: {user?.email}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/auth/profile/edit">
                <Button>Edit</Button>
              </Link>
              <Link href="/auth/reset-password">
                <Button>Reset Password</Button>
              </Link>
              <Link href="/auth/magic-link">
                <Button>Magic Link</Button>
              </Link>
              <Link href="/auth/phone-verification">
                <Button>Phone Verification</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
