import StripeCheckout from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <StripeCheckout />
    </main>
  );
}
