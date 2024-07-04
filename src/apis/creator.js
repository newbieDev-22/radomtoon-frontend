import axios from "../config/axios";

const creatorApi = {};

creatorApi.getCreator = () => axios.get("/creators");
creatorApi.updateInfoCreator = (data) => axios.patch("/creators/info", data);

export default creatorApi;
