import productApi from "../../apis/product";

export const creatorProductSlice = (set) => ({
  creatorProduct: { data: [], loading: false, error: null, today: new Date() },
  fetchCreatorProduct: async () => {
    try {
      set((state) => ({
        creatorProduct: { ...state.creatorProduct, loading: true, error: null },
      }));
      const productResponse = await productApi.getCreatorProduct();
      set((state) => ({
        creatorProduct: {
          ...state.creatorProduct,
          data: productResponse.data.productList,
        },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({
        creatorProduct: { ...state.creatorProduct, error: err.message },
      }));
    } finally {
      set((state) => ({
        creatorProduct: { ...state.creatorProduct, loading: false, error: null },
      }));
    }
  },
  resetCreatorProduct: () =>
    set((state) => ({
      creatorProduct: { ...state.creatorProduct, data: [], loading: false, error: null },
    })),
});
