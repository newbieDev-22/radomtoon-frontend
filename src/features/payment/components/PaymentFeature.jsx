import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";



function PaymentFeature() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {

    fetch("http://localhost:8888/config").then(async (r) => {
      const { publishableKey } = await r.json();
      // console.log("publishableKey", publishableKey)
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);


  useEffect(() => {
    fetch("http://localhost:8888/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {/* <h1>React Stripe and the Payment Element</h1> */}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default PaymentFeature;
