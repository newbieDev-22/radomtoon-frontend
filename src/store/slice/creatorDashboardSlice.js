import statsApi from "../../apis/stats";

export const creatorDashboardSlice = set => ({
  creatorDashboardData: {
    pieChartData: [],

    loading: false,
    error: null,
  },
  creatorDashboardLoading : false,
  fetchCreatorDashboardData: async (id) => {
    try {
      set( state => ({
        creatorDashboardData: {
          ...state.creatorDashboardData,
          loading: true
        },
      }));

      const [
        tiersPercentage,
      ] = await Promise.all([
        statsApi.tiersPercentage(id),
      ])

      set( state  => ({
        creatorDashboardData: {
          ...state.creatorDashboardData,
          pieChartData: tiersPercentage.data.combineTier
        }
      }))

    } catch (err) {
      console.error(err)
    } finally {
      set( state => ({
        creatorDashboardData: {
          ...state.creatorDashboardData,
          loading:false
        }
      }))
    }
  },

})