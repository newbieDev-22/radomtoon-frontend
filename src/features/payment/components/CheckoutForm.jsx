import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../../../components/Button";
// import "../css/App.css";
// import "../css/index.css"

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // return_url: `${window.location.origin}/completion`,
        return_url: `http://localhost:5173/`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    // <div className=" ">
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className=" w-5/12  min-h-[20rem]  p-5 rounded-lg shadow-2xl flex flex-col gap-2"
    >
      <PaymentElement />
      <div className=" flex justify-center h-16 mt-2 items-center">
        <Button disabled={isProcessing || !stripe || !elements} id="submit" >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </Button>
      </div>

      {/* Show any error or success messages */}
      {message && <div id="payment-message" className="text-red-500 mt-1">{message}</div>}
    </form>
    // </div>

  );
}
