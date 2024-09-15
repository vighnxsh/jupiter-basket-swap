import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      <div className="space-y-4 flex flex-col items-center">
        <Link href="/swap" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          Go to Swap Page
        </Link>
        <Link href="/swap2" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          Go to Swap Page 2
        </Link>
      </div>
    </div>
  );
}