import axios from "../config/axios";

const commentApi = {}

commentApi.getComment = () => axios.get(`/comments`)
commentApi.createComment = (productId, data) => axios.post(`/comments/product/${productId}`, data)
commentApi.updateComment = (commenetId, data) => axios.patch(`/comments/${commenetId}`, data)
commentApi.deleteComment = (commenetId) => axios.delete(`/comments/${commenetId}`)

export default commentApi