import creatorApi from "../../apis/creator";
import { DELIVERY_STATUS } from "../../constants";

export const creatorUserSlice = (set, get) => ({
  creatorUser: { data: [], loading: false, error: null },
  delivery: { data: [], loading: false, error: null },
  fetchCreatorUser: async () => {
    try {
      set((state) => ({
        creatorUser: { ...state.creatorUser, loading: true },
      }));

      const getCreator = await creatorApi.getCreator();
      set((state) => ({
        creatorUser: {
          ...state.creatorUser,
          data: getCreator.data.creatorList,
        },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({
        creatorUser: {
          ...state.creatorUser,
          error: "Failed to fetch creator data",
        },
      }));
    } finally {
      set((state) => ({
        creatorUser: { ...state.creatorUser, loading: false },
      }));
    }
  },
  selectCreator: (creatorId) => {
    const { data } = get().creatorUser;
    const selectedCreator = data.filter((el) => el.id === +creatorId);
    return selectedCreator[0];
  },
  updateCreatorUser: (creatorId, input) => {
    const { data } = get().creatorUser;
    const dummyCreatorUser = [...data];
    const foundedIndex = dummyCreatorUser.findIndex(
      (el) => el.id === +creatorId
    );
    if (foundedIndex !== -1) {
      dummyCreatorUser[foundedIndex] = {
        ...dummyCreatorUser[foundedIndex],
        ...input,
      };
      set((state) => ({
        creatorUser: {
          ...state.creatorUser,
          data: dummyCreatorUser,
        },
      }));
    }
  },

  fetchDeliveryUser: async (productId) => {
    try {
      set((state) => ({ delivery: { ...state.delivery, loading: true } }));

      const getDelivery = await creatorApi.getDeliveryStatus(productId);
      set((state) => ({
        delivery: {
          ...state.delivery,
          data: getDelivery.data.deliveryList,
        },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({
        delivery: { ...state.delivery, error: "Failed to update delivery data" },
      }));
    } finally {
      set((state) => ({ delivery: { ...state.delivery, loading: false } }));
    }
  },

  updateDelivery: async (productId, supporterId) => {
    try {
      set((state) => ({ delivery: { ...state.delivery, loading: true } }));

      await creatorApi.updateDeliveryStatus(productId, supporterId);
      const { data } = get().delivery;
      const dummyData = [...data];

      const supporterIndex = dummyData.findIndex(
        (el) => el.supporterId === +supporterId
      );

      if(supporterIndex !== -1){

        dummyData[supporterIndex]["deliveryStatus"]=DELIVERY_STATUS.DELIVERED
      }

      set((state) => ({
        delivery: {
          ...state.delivery,
          data: dummyData
        },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({
        delivery: { ...state.delivery, error: "Failed to fetch delivery data" },
      }));
    } finally {
      set((state) => ({ delivery: { ...state.delivery, loading: false } }));
    }
  },
});
