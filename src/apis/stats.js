import axios from "../config/axios";

const statsApi = {}

statsApi.getStat = () => axios.get("/stats")

export default statsApi