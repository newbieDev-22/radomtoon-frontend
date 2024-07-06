import supporterApi from "../../apis/supporter";

export const supporterSlice = (set) => ({
  supporter: { history: {}, loading: false, error: null },

  fetchHistory: async () => {
    try {
      set((state) => ({ supporter: { ...state.supporter, loading: true } }));
      const dataResponse = await supporterApi.getHistory();
      set((state) => ({
        supporter: { ...state.supporter, history: dataResponse.data.supporterHistory },
      }));
    } catch (error) {
      console.log(error);
    } finally {
      set((state) => ({ supporter: { ...state.supporter, loading: false } }));
    }
  },
});
