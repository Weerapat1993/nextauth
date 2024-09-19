import { auth } from "@/auth";
import Header from "@/components/header";
import { EditProfile } from "@/components/profile/edit-profile";
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
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-2xl mx-auto p-6 bg-ct-dark-100 rounded-md h-[20rem]">
            <h2 className="text-2xl font-bold">Edit Profile</h2>
            <EditProfile initialState={user} />
        </div>
      </section>
    </>
  );
}
