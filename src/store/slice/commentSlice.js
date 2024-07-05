
import commentApi from "../../apis/comment"


export const commentSlice = (set, get) => ({
    comments: { data: [], loading: false, error: null },
    commentLoading: false,
    fetchComment: async () => {
        try {
            set((state) => ({ comments: ({ ...state.comments, loading: true }) }))
            const commentResponse = await commentApi.getComment()
            set((state) => ({ comments: { ...state.comments, data: commentResponse.data.commentList } }))
        } catch (error) {
            console.log(error)
        } finally {
            set((state) => ({ comments: { ...state.comments, loading: false } }))
        }
    },

    commentFilterByProductId: (productId) => {
        const { data } = get().comments
        return data.filter(el => el.productId === +productId)
    },

    createComment: async (productId, comment) => {
        try {
            set(() => ({ commentLoading: true }))
            const createResponse = await commentApi.createComment(productId, comment)
            const commentData = createResponse.data.comment
            set((state) => ({ comments: { ...state.comments, data: [commentData, ...state.comments.data] } }))
            return commentData
        } catch (error) {
            console.log(error)
        } finally {
            set(() => ({ commentLoading: false }))
        }

    },

    updateComment: async (commentId, newComment) => {
        try {
            set(() => ({ commentLoading: true }))
            const updateResponse = await commentApi.updateComment(commentId, newComment)
            const newCommentResponse = updateResponse.data.comment
            const { data } = get().comments
            const dummyCommentData = [...data]
            const index = dummyCommentData.findIndex(el => el.id === commentId)
            dummyCommentData[index] = newCommentResponse
            set((state) => ({ comment: { ...state.comment, data: dummyCommentData } }))
        } catch (error) {
            console.error(error)
        } finally {
            set(() => ({ commentLoading: false }))
        }
    },

    deleteComment: async (commentId) => {
        try {
            set(() => ({ commentLoading: true }))
            await commentApi.deleteComment(commentId)
            const { data } = get().comments
            const dummyCommentData = [...data]
            set((state) => ({ comment: { ...state.comment, data: dummyCommentData.filter(el => el.id !== commentId) } }))
        } catch (error) {
            console.error(error)
        } finally {
            set(() => ({ commentLoading: false }))
        }
    }
})