import { auth } from '@/auth';
import Header from '@/components/header';
import { redirect } from 'next/navigation';

export default async function Protected() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  const user = session?.user;
  return (
    <>
      <Header />
      <section className='bg-ct-blue-600 min-h-screen pt-20'>
        <div className='max-w-4xl p-6 mx-auto bg-ct-dark-100 rounded-md h-[20rem]'>
          <h1 className="text-2xl font-bold">Protected Content</h1>
          <p>Only authenticated users can see this page.</p>
        </div>
      </section>
    </>
  );
}
