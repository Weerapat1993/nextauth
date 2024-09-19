import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <section className='bg-ct-blue-600 min-h-screen pt-20'>
        <div className='max-w-4xl p-6 mx-auto bg-ct-dark-100 rounded-md h-[20rem]'>
          <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
          <p>This is the home page of MyApp.</p>
          <Link href="/protected" className='text-blue-500 hover:underline'>
            Go to protected content
          </Link>
        </div>
      </section>
    </>
  );
}
