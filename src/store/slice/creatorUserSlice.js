import creatorApi from "../../apis/creator";

export const creatorUserSlice = (set, get) => ({
  creatorUser: { data: [], loading: false, error: null },
  fetchCreatorUser: async () => {
    try {
      set((state) => ({ creatorUser: { ...state.creatorUser, loading: true } }));

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
        creatorUser: { ...state.creatorUser, error: "Failed to fetch creator data" },
      }));
    } finally {
      set((state) => ({ creatorUser: { ...state.creatorUser, loading: false } }));
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
    const foundedIndex = dummyCreatorUser.findIndex((el) => el.id === +creatorId);
    if (foundedIndex !== -1) {
      dummyCreatorUser[foundedIndex] = { ...dummyCreatorUser[foundedIndex], ...input };
      set((state) => ({
        creatorUser: {
          ...state.creatorUser,
          data: dummyCreatorUser,
        },
      }));
    }
  },
});
