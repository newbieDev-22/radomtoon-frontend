import axios from "../config/axios";

const adminApi = {};

adminApi.registerWaiting = () => axios.get("/admin/register/waiting-approval");
adminApi.registerPass = (creatorId) =>
  axios.patch(`/admin/register/creator/${creatorId}/pass-approval`);
adminApi.registerFailed = (creatorId) =>
  axios.patch(`/admin/register/creator/${creatorId}/failed-approval`);

adminApi.productWaiting = () => axios.get("/admin/product/waiting-approval");
adminApi.productPass = (productId) =>
  axios.patch(`/admin/product/${productId}/pass-approval`);
adminApi.productFailed = (productId, body) =>
  axios.patch(`/admin/product/${productId}/failed-approval`, body);

adminApi.milestoneWaiting = () => axios.get("/admin/milestone/waiting-approval");
adminApi.milestonePass = (milestoneId) =>
  axios.patch(`/admin/milestone/${milestoneId}/pass-approval`);
adminApi.milestoneFailed = (milestoneId, body) =>
  axios.patch(`/admin/milestone/${milestoneId}/failed-approval`, body);

export default adminApi;
