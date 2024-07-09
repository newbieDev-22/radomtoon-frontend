import axios from "../config/axios";

const statsApi = {};

statsApi.getStat = () => axios.get("/stats");
statsApi.tiersPercentage = (productId) =>
  axios.get(`/stats/product/${productId}/tier-stat`);
statsApi.totalFund = (productId) => axios.get(`/stats/product/${productId}/fund-trend`);

export default statsApi;
