import axios from "../config/axios";

const statsApi = {}

statsApi.getStat = () => axios.get("/stats")
statsApi.tiersPercentage = (id) => axios.get(`/stats/product/${id}/tier-stat`)

export default statsApi