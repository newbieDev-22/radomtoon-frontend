import axios from "../config/axios";

const stripeApi = {};

stripeApi.config = () => axios.get(`${import.meta.env.VITE_API_URL}/stripe/config`);
stripeApi.paymentIntent = (tierId) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/stripe/create-payment-intent/tier/${tierId}`
  );

export default stripeApi;
