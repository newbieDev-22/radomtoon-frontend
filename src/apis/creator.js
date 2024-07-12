import axios from "../config/axios";

const creatorApi = {};

creatorApi.getCreator = () => axios.get("/creators");
creatorApi.updateInfoCreator = (data) => axios.patch("/creators/info", data);
creatorApi.sendMilestoneEvidence = (milestoneId, data) =>
  axios.patch(`milestones/${milestoneId}/send-evidence`, data);

creatorApi.getDeliveryStatus = (productId) =>
  axios.get(`/creators/product/${productId}/delivery-status`);

creatorApi.updateDeliveryStatus = (productId, supporterId) =>
  axios.patch(`/support-products/product/${productId}/supporter/${supporterId}`);

creatorApi.getCreatorStatus = (productId) => axios.get(`/stats/product/${productId}`);

export default creatorApi;
