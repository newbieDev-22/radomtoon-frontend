import axios from "../config/axios";

const authApi = {};

authApi.supporterRegister = (body) => axios.post("/auth/register/supporter", body);
authApi.creatorRegister = (body) => axios.post("/auth/register/creator", body);
authApi.login = (body) => axios.post("/auth/login", body);
authApi.getAuthUser = () => axios.get("/auth/get-me");
authApi.creatorProfileImage = (formData) =>
  axios.patch("/creators/update-profile", formData);

authApi.supporterProfileImage = (formData) =>
  axios.patch("/auth/update-profile", formData);

export default authApi;
