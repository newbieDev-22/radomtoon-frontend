import axios from "../config/axios";

const productApi = {};

productApi.getProduct = () => axios.get("/products");
productApi.getFiveProduct = () => axios.get("/products/five-product");

productApi.getCreatorProduct = () => axios.get(`/products/creator`);
productApi.createProduct = (formData) => axios.post("/products", formData);
productApi.updateProduct = (productId, formData) =>
  axios.patch(`/products/${productId}`, formData);
productApi.deleteProduct = (productId) => axios.delete(`/products/${productId}`);
productApi.updateStory = (productId, data) =>
  axios.patch(`/products/${productId}/update-story`, data);
productApi.sendProductToApproval = (productId) =>
  axios.patch(`/products/${productId}/pending-approval`);

export default productApi;
