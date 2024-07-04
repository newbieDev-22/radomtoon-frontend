import axios from "../config/axios";

const tierApi = {};

tierApi.createTier = (productId, formData) =>
  axios.post(`/tiers/product/${productId}`, formData);
tierApi.updateTier = (tierId, formData) => axios.patch(`/tiers/${tierId}`, formData);
tierApi.deleteTier = (tierId) => axios.delete(`/tiers/${tierId}`);

export default tierApi;
