import statsApi from "../../apis/stats";

export const creatorDashboardSlice = (set) => ({
  creatorDashboardData: {
    pieChartData: [],
    lineChartData: [],
    loading: false,
    error: null,
  },
  creatorDashboardLoading: false,
  fetchCreatorDashboardData: async (productId) => {
    try {
      set((state) => ({
        creatorDashboardData: {
          ...state.creatorDashboardData,
          loading: true,
        },
      }));

      const [tiersPercentage, totalFundData] = await Promise.all([
        statsApi.tiersPercentage(productId),
        statsApi.totalFund(productId),
      ]);

      set((state) => ({
        creatorDashboardData: {
          ...state.creatorDashboardData,
          pieChartData: tiersPercentage.data.combineTier,
          lineChartData: totalFundData.data.cumulativeFundAllMonth,
        },
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set((state) => ({
        creatorDashboardData: {
          ...state.creatorDashboardData,
          loading: false,
        },
      }));
    }
  },
});
