import productApi from "../../apis/product";
import { APPROVAL_STATUS_ID, IS_CREATOR_ACCEPT_STATUS } from "../../constants";

export const productSlice = (set, get) => ({
  product: { data: [], loading: false, error: null, today: new Date() },
  approvalProduct: [],
  fetchProduct: async () => {
    try {
      set((state) => ({ product: { ...state.product, loading: true, error: null } }));
      const productResponse = await productApi.getProduct();
      const productList = productResponse.data.productList;
      set((state) => ({
        product: { ...state.product, data: productList },
      }));
      const approvalProduct = productList.filter(
        (el) => el.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS
      );
      set((state) => ({ approvalProduct: approvalProduct }));
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set((state) => ({ product: { ...state.product, loading: false, error: null } }));
    }
  },
  filterProductByCreatorId: (creatorId, isApproved = null) => {
    if (isApproved) {
      const approvalProduct = get().approvalProduct;
      return approvalProduct.filter((el) => el.creatorId === +creatorId);
    } else {
      const { data } = get().product;
      return data.filter((el) => el.creatorId === +creatorId);
    }
  },
});
