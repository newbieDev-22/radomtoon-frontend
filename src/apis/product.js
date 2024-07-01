import axios from "../config/axios";

const productApi = {};

productApi.getProduct = () => axios.get("/products");

export default productApi;
