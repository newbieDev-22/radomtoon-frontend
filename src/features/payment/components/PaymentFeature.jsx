import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import stripeApi from "../../../apis/stripe";

function PaymentFeature() {
  const { tierId } = useParams();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const fetchConfig = async () => {
    const config = await stripeApi.config();
    setStripePromise(loadStripe(config.data.publishableKey));
  };

  const fetchPaymentIntent = async () => {
    const paymentIntent = await stripeApi.paymentIntent(tierId);
    setClientSecret(paymentIntent.data.clientSecret);
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  useEffect(() => {
    fetchPaymentIntent();
  }, [tierId]);

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold pb-5 text-center">Payment Methods</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default PaymentFeature;
