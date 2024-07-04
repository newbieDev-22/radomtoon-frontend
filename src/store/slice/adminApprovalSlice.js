import adminApi from "../../apis/admin";

export const adminApprovalSlice = (set) => ({
  waitingApproval: {
    creator: [],
    product: [],
    milestone: [],
    loading: false,
    error: null,
  },
  approvalLoading: false,
  fetchWaitingApproval: async () => {
    try {
      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          loading: true,
        },
      }));
      const [creatorList, productList, milestoneList] = await Promise.all([
        adminApi.registerWaiting(),
        adminApi.productWaiting(),
        adminApi.milestoneWaiting(),
      ]);

      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          creator: creatorList.data.pendingApprovalCreator,
          product: productList.data.pendingApprovalProduct,
          milestone: milestoneList.data.pendingApprovalMilestone,
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          loading: false,
        },
      }));
    }
  },
  creatorRegisterPass: async (creatorId) => {
    try {
      set(() => ({ approvalLoading: true }));
      await adminApi.registerPass(+creatorId);
      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          creator: state.waitingApproval.creator.filter(
            (creator) => creator.id !== +creatorId
          ),
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set(() => ({ approvalLoading: false }));
    }
  },
  creatorRegisterFailed: async (creatorId) => {
    try {
      set(() => ({ approvalLoading: true }));
      await adminApi.registerFailed(+creatorId);
      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          creator: state.waitingApproval.creator.filter(
            (creator) => creator.id !== +creatorId
          ),
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set(() => ({ approvalLoading: false }));
    }
  },
  productPass: async (productId) => {
    try {
      set(() => ({ approvalLoading: true }));
      await adminApi.productPass(+productId);
      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          product: state.waitingApproval.product.filter(
            (product) => product.id !== +productId
          ),
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set(() => ({ approvalLoading: false }));
    }
  },
  productFailed: async (productId, body) => {
    try {
      set(() => ({ approvalLoading: true }));
      await adminApi.productFailed(+productId, body);
      set((state) => ({
        waitingApproval: {
          ...state.waitingApproval,
          product: state.waitingApproval.product.filter(
            (product) => product.id !== +productId
          ),
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set(() => ({ approvalLoading: false }));
    }
  },
});
