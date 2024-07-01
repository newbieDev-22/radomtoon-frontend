import productApi from "../../apis/product";

export const productSlice = (set) => ({
  product: { data: [], loading: false, error: null, today: new Date() },
  fetchProduct: async () => {
    try {
      set((state) => ({ product: { ...state.product, loading: true, error: null } }));
      const productResponse = await productApi.getProduct();
      set((state) => ({
        product: { ...state.product, data: productResponse.data.productList },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set((state) => ({ product: { ...state.product, loading: false, error: null } }));
    }
  },
});
