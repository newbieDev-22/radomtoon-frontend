import creatorApi from "../../apis/creator";
import productApi from "../../apis/product";

export const creatorProductSlice = (set,get) => ({
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
        creatorProduct: {
          ...state.creatorProduct,
          loading: false,
        },
      }));
    }
  },
  resetCreatorProduct: () =>
    set((state) => ({
      creatorProduct: {
        ...state.creatorProduct,
        data: [],
        loading: false,
        error: null,
      },
    })),

  sendMilestoneEvidence: async (
    milestoneId,
    body,
    productId,
    milestoneRankId
  ) => {
    try {
      set((state) => ({
        creatorProduct: { ...state.creatorProduct, loading: true, error: null },
      }));

      const milestoneEvidenceResponse = await creatorApi.sendMilestoneEvidence(
        milestoneId,
        body
      );

      const { data } = get().creatorProduct;
      const dummyData = [...data];
      const productIndex = dummyData.findIndex((el) => el.id === +productId);
      
      if (productIndex !== -1) {
        const milestoneIndex =
        dummyData[productIndex].productMilestones.findIndex((el) => el.milestoneRankId === +milestoneRankId);
        if (milestoneIndex !== -1) {
          dummyData[productIndex].productMilestones[milestoneIndex] =
          milestoneEvidenceResponse.data.milestone;
          set((state) => ({
            creatorProduct: { ...state.creatorProduct, data: dummyData },
          }));
        }
      }
      
    } catch (err) {
      console.error(err)
      set((state) => ({
        creatorProduct: { ...state.creatorProduct, error: err.message },
      }));

    } finally {

      set((state) => ({
        creatorProduct: { ...state.creatorProduct, loading: false},
      }));

    }
  },
});
