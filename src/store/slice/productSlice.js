import milestoneApi from "../../apis/milestone";
import productApi from "../../apis/product";
import tierApi from "../../apis/tier";
import { APPROVAL_STATUS_ID } from "../../constants";

export const productSlice = (set, get) => ({
  product: { data: [], loading: false, error: null, today: new Date() },
  approvalProduct: [],
  searchProduct: [],
  fiveProduct: [],
  tierPendingPayment: {},
  productLoading: false,

  setWord: (value) => set(() => ({ word: value })),
  setCategoryFilter: (value) => set(() => ({ categoryFilter: value })),
  setLoading: (loading) => set((state) => ({ product: { ...state.product, loading } })),
  setError: (error) => set((state) => ({ product: { ...state.product, error } })),

  fetchProduct: async () => {
    try {
      set((state) => ({ product: { ...state.product, loading: true, error: null } }));
      const {
        data: { productList },
      } = await productApi.getProduct();

      const approvalProduct = productList
        .filter((el) => el.productStatusId === APPROVAL_STATUS_ID.PENDING)
        .sort((a, b) => b.totalFund / b.goal - a.totalFund / a.goal);

      set((state) => ({
        product: { ...state.product, data: productList },
        approvalProduct,
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set((state) => ({ product: { ...state.product, loading: false } }));
    }
  },

  fetchFiveProduct: async () => {
    try {
      set((state) => ({ product: { ...state.product, loading: true, error: null } }));
      const productResponse = await productApi.getFiveProduct();
      set(() => ({ fiveProduct: productResponse.data.fiveProduct }));
    } catch (err) {
      console.error(err);
    } finally {
      set((state) => ({ product: { ...state.product, loading: false } }));
    }
  },

  filterProductByCreatorId: (creatorId, isApproved = null) => {
    const { data } = get().product;
    if (data.length > 0) {
      const products = isApproved ? get().approvalProduct : data;
      return products.filter((el) => el.creatorId === +creatorId);
    } else {
      return [];
    }
  },

  createProduct: async (formData) => {
    try {
      set(() => ({ productLoading: true }));
      set((state) => ({ product: { ...state.product, error: null } }));
      const {
        data: { productDetail },
      } = await productApi.createProduct(formData);

      set((state) => ({
        product: {
          ...state.product,
          data: [productDetail, ...state.product.data],
        },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  updateProduct: async (productId, formData) => {
    try {
      set(() => ({ productLoading: true }));
      const {
        data: { productDetail },
      } = await productApi.updateProduct(productId, formData);

      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === productDetail.id);
      if (productIndex !== -1) {
        data[productIndex] = productDetail;
        set((state) => ({ product: { ...state.product, data } }));
      }
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  deleteProduct: async (productId) => {
    try {
      set(() => ({ productLoading: true }));
      await productApi.deleteProduct(productId);
      const { data } = get().product;
      const updatedData = data.filter((el) => el.id !== productId);

      set((state) => ({ product: { ...state.product, data: updatedData } }));
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  filterProductByProductId: (productId) => {
    const { data } = get().product;
    return data.find((el) => el.id === +productId) || null;
  },

  updateStory: async (productId, formData) => {
    try {
      set(() => ({ productLoading: true }));
      const {
        data: { productDetail },
      } = await productApi.updateStory(productId, formData);
      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === productDetail.id);
      if (productIndex !== -1) {
        data[productIndex] = productDetail;
        set((state) => ({ product: { ...state.product, data } }));
      }
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  createTier: async (productId, formData) => {
    try {
      set(() => ({ productLoading: true }));
      set((state) => ({ product: { ...state.product, error: null } }));
      const {
        data: { tier },
      } = await tierApi.createTier(+productId, formData);
      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === +productId);
      if (productIndex !== -1) {
        data[productIndex].productTiers = [...data[productIndex].productTiers, tier];
        set((state) => ({ product: { ...state.product, data } }));
      }
      delete tier.productId;
      return tier;
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  updateTier: async (tierId, formData) => {
    try {
      set(() => ({ productLoading: true }));
      const {
        data: { tier },
      } = await tierApi.updateTier(+tierId, formData);
      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === tier.productId);
      if (productIndex !== -1) {
        const tierIndex = data[productIndex].productTiers.findIndex(
          (el) => el.id === tier.id
        );
        if (tierIndex !== -1) {
          data[productIndex].productTiers[tierIndex] = tier;
          set((state) => ({ product: { ...state.product, data } }));
        }
      }
      delete tier.productId;
      return tier;
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  deleteTier: async (productId, tierId) => {
    try {
      set(() => ({ productLoading: true }));
      await tierApi.deleteTier(tierId);
      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === +productId);
      if (productIndex !== -1) {
        const updatedTiers = data[productIndex].productTiers.filter(
          (el) => el.id !== tierId
        );
        data[productIndex].productTiers = updatedTiers;
        set((state) => ({ product: { ...state.product, data } }));
      }
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  milestoneUpdateInfo: async (milestoneId, milestoneInput) => {
    try {
      set(() => ({ productLoading: true }));

      const milestoneResponse = await milestoneApi.updateMilestoneInfo(
        milestoneId,
        milestoneInput
      );
      const milestoneData = milestoneResponse.data.milestone;
      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === milestoneData.productId);
      if (productIndex !== -1) {
        const milestoneIndex = data[productIndex].productMilestones.findIndex(
          (el) => el.id === milestoneData.id
        );
        if (milestoneIndex !== -1) {
          data[productIndex].productMilestones[milestoneIndex] = milestoneData;
          set((state) => ({ product: { ...state.product, data } }));
        }
      }
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  sendProductToApproval: async (productId) => {
    try {
      set(() => ({ productLoading: true }));
      await productApi.sendProductToApproval(+productId);
      const { data } = get().product;
      const productIndex = data.findIndex((el) => el.id === +productId);
      if (productIndex !== -1) {
        data[productIndex].approvalStatusId = APPROVAL_STATUS_ID.PENDING;
        set((state) => ({ product: { ...state.product, data } }));
      }
    } catch (err) {
      console.error(err);
      set((state) => ({ product: { ...state.product, error: err.message } }));
    } finally {
      set(() => ({ productLoading: false }));
    }
  },

  filterProduct: (categoryId = null, word = null) => {
    const approvalProduct = get().approvalProduct;
    const cloneData = [...approvalProduct];
    const keyFilter = ["productName", "creatorName"];
    const filterByCategory = cloneData.filter((el) => el.categoryId === +categoryId);
    if (categoryId) {
      if (word) {
        const filterByWord = filterByCategory.filter((item) => {
          return keyFilter.some((filter) => {
            return item[filter].toLowerCase().indexOf(word.toLowerCase()) > -1;
          });
        });
        set(() => ({ searchProduct: filterByWord }));
        return filterByWord;
      } else {
        set(() => ({ searchProduct: filterByCategory }));
        return filterByCategory;
      }
    } else {
      if (word) {
        const filterByWord = cloneData.filter((item) => {
          return keyFilter.some((filter) => {
            return item[filter].toLowerCase().indexOf(word.toLowerCase()) > -1;
          });
        });
        set(() => ({ searchProduct: filterByWord }));
        return filterByWord;
      } else {
        set(() => ({ searchProduct: approvalProduct }));
        return approvalProduct;
      }
    }
  },

  resetSearch: () => {
    set(() => ({ searchProduct: [] }));
  },

  setTierPending: (productId, tierId) => {
    const { data } = get().product;
    const product = data.filter((el) => el.id === +productId)[0];
    if (product) {
      const tier = product.productTiers.filter((el) => el.id == +tierId)[0];
      set(() => ({ tierPendingPayment: tier }));
    }
  },
});
