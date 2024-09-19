import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
      <p>This is the home page of MyApp.</p>
      <Link href="/protected" className="text-blue-500 hover:underline">
        Go to protected content
      </Link>
    </div>
  );
}
