import axios from "../config/axios";

const milestoneApi = {};

milestoneApi.updateMilestoneInfo = (milestoneId, data) =>
  axios.patch(`/milestones/${milestoneId}`, data);

export default milestoneApi;
