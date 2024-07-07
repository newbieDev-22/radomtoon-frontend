import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import Button from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { productId, tierId } = useParams();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const createSupportProduct = useStore((state) => state.createSupportProduct);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      setIsProcessing(true);

      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (paymentIntent) {
        if (paymentIntent.status === "succeeded") {
          await createSupportProduct(tierId);
          toast.success("Payment successfully!");
          navigate("/");
        }
      }

      setIsProcessing(false);

      if (error?.type === "card_error" || error?.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className=" w-5/12  min-h-[20rem] min-w-[30rem]  p-5 rounded-lg shadow-2xl flex flex-col gap-2"
    >
      <PaymentElement
        options={{ paymentMethodOrder: ["apple_pay", "google_pay", "card"] }}
      />
      <div className=" flex justify-between h-16 mt-2 items-center">
        <Button onClick={() => navigate(`/campaign/${productId}/tiers`)}>Back</Button>
        <Button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">{isProcessing ? "Processing ... " : "Pay now"}</span>
        </Button>
      </div>
      {message && (
        <div id="payment-message" className="text-red-500 mt-1">
          {message}
        </div>
      )}
    </form>
  );
}
