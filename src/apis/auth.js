import axios from "../config/axios";

const authApi = {};

authApi.supporterRegister = (body) => axios.post("/auth/register/supporter", body);
authApi.creatorRegister = (body) => axios.post("/auth/register/creator", body);
authApi.login = (body) => axios.post("/auth/login", body);
authApi.getAuthUser = () => axios.get("/auth/get-me");

export default authApi;
