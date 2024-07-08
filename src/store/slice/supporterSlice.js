import supportProductApi from "../../apis/support-product";
import supporterApi from "../../apis/supporter";

export const supporterSlice = (set, get) => ({
  supporter: { history: [], loading: false, error: null },

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
  createSupportProduct: async (tierId) => {
    try {
      set((state) => ({ supporter: { ...state.supporter, loading: true } }));
      const supportResponse = await supportProductApi.createSupport(tierId);
      set((state) => ({
        supporter: {
          ...state.supporter,
          history: [supportResponse.data.supporterHistory, ...state.supporter.history],
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set((state) => ({ supporter: { ...state.supporter, loading: false } }));
    }
  },

  cancelSupportProduct: async (productIdId) => {
    try {
      set((state) => ({ supporter: { ...state.supporter, loading: true } }));
      await supportProductApi.cancelSupport(productIdId);
      const { history } = get().supporter;
      console.log("arererrerer");
      const deleteIndex = history.findIndex((item) => item.productId === productIdId);
      if (deleteIndex !== -1) {
        const dummyHistory = [...history];
        dummyHistory[deleteIndex] = {
          ...dummyHistory[deleteIndex],
          fundingStatus: "CANCELED",
        };
        set((state) => ({ supporter: { ...state.supporter, history: dummyHistory } }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      set((state) => ({ supporter: { ...state.supporter, loading: false } }));
    }
  },
});
