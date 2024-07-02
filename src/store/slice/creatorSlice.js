import productApi from "../../apis/product";

export const creatorSlice = (set) => ({
  creatorProduct: { data: [], loading: false, error: null, today: new Date() },
  fetchCreatorProduct: async () => {
    try {
      set((state) => ({
        creatorProduct: { ...state.product, loading: true, error: null },
      }));
      const productResponse = await productApi.getCreatorProduct();
      set((state) => ({
        creatorProduct: { ...state.product, data: productResponse.data.productList },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({ creatorProduct: { ...state.product, error: err.message } }));
    } finally {
      set((state) => ({
        creatorProduct: { ...state.product, loading: false, error: null },
      }));
    }
  },
  resetCreatorProduct: () =>
    set((state) => ({
      creatorProduct: { ...state.creatorProduct, data: [], loading: false, error: null },
    })),
});
