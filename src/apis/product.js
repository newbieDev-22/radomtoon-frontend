import axios from "../config/axios";

const productApi = {};

productApi.getProduct = () => axios.get("/products");
productApi.getCreatorProduct = () => axios.get(`/products/creator`);
productApi.createProduct = (formData) => axios.post("/products", formData);
export default productApi;
