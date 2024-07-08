import axios from "../config/axios";

const supportProductApi = {};

supportProductApi.createSupport = (tierId) =>
  axios.post(`/support-products/tier/${tierId}`);
supportProductApi.cancelSupport = (productId) =>
  axios.delete(`/support-products/product/${productId}`);

export default supportProductApi;
