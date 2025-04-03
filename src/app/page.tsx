import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Stripe Checkout in your site</h1>
      <Link href="/checkout" className="mt-4 text-red-600 text-sm font-medium">click to checkout</Link>
    </main>
  );
}
