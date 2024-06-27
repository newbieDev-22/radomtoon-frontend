import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

function PaymentFeature() {
  const { tierId } = useParams();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stripe/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stripe/create-payment-intent/tier/${tierId}`, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      const { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold pb-5">Payment Methods</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default PaymentFeature;
