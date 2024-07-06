import statsApi from "../../apis/stats"

export const statSlice = (set) => ({
    stats: { data: {}, loading: false, error: null },
    statsLoading: false,

    featchStats: async () => {
        try {
            set(() => ({ statsLoading: true }))
            const dataResponse = await statsApi.getStat()
            set((state) => ({ stats: { ...state.stats, data: dataResponse.data.stat } }))
        } catch (error) {
            console.log(error)
        } finally {
            set(() => ({ statsLoading: false }))
        }
    }
})