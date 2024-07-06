import axios from "../config/axios";

const supporterApi = {};

supporterApi.getHistory = () => axios.get("/histories");
export default supporterApi;
