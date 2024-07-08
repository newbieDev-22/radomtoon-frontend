import statsApi from "../../apis/stats";

export const statSlice = (set) => ({
  stats: { data: {}, loading: false, error: null },

  fetchStats: async () => {
    try {
      set((state) => ({ stats: { ...state.stats, loading: true } }));
      const dataResponse = await statsApi.getStat();
      set((state) => ({ stats: { ...state.stats, data: dataResponse.data.stat } }));
    } catch (error) {
      console.log(error);
    } finally {
      set((state) => ({ stats: { ...state.stats, loading: false } }));
    }
  },
});
