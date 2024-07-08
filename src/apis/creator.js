import axios from "../config/axios";

const creatorApi = {};

creatorApi.getCreator = () => axios.get("/creators");
creatorApi.updateInfoCreator = (data) => axios.patch("/creators/info", data);
creatorApi.sendMilestoneEvidence = (milestoneId, data) =>
  axios.patch(`milestones/${milestoneId}/send-evidence`, data);

export default creatorApi;
