import adminApi from "../../apis/admin";
import { PROVINCE_MAP_MAPPING } from "../../constants";

export const adminDashboardSlice = (set) => ({
  dashboardData: {
    adminStatsData: [],

    textBlockData: [],
    lineChartData: {},
    doughnutChartData: [],

    geoJsonData: null,

    loading: false,
    error: null,
  },
  dashboardLoading: false,
  fetchDashboardData: async () => {
    try {
      set((state) => ({
        dashboardData: {
          ...state.dashboardData,
          loading: true,
        },
      }));

      const [
        adminStatsResponse,
        activeCreatorResponse,
        activeSupporterResponse,
        averageFundsResponse,
        successProjectsResponse,
        fundsByMonthResponse,
        projectOverviewResponse,
        initialMapResponse,
        postMapResponse,
      ] = await Promise.all([
        adminApi.adminStats(),
        adminApi.activeCreator(),
        adminApi.activeSupporter(),
        adminApi.averageFunds(),
        adminApi.countProject(),
        adminApi.fundsByMonth(),
        adminApi.projectOverview(),
        adminApi.initialMap(),
        adminApi.postMap(),
      ]);

      const provinceCount = postMapResponse.data.provinceCount;
      const updatedGeoJson = initialMapResponse.data.features.map((feature) => {
        const updatedProperties = { ...feature.properties };
        const provinceName = PROVINCE_MAP_MAPPING[updatedProperties.name];
        if (provinceName && provinceCount[provinceName]) {
          updatedProperties.p = provinceCount[provinceName];
        } else {
          updatedProperties.p = 0;
        }
        return { ...feature, properties: updatedProperties };
      });

      set((state) => ({
        dashboardData: {
          ...state.dashboardData,
          adminStatsData: adminStatsResponse.data,
          textBlockData: [
            activeCreatorResponse.data,
            activeSupporterResponse.data,
            averageFundsResponse.data,
            successProjectsResponse.data,
          ],
          lineChartData: fundsByMonthResponse.data.cumulativeFundAllMonth,
          doughnutChartData: projectOverviewResponse.data,
          geoJsonData: updatedGeoJson,
        },
      }));
    } catch (error) {
      console.error(error);
    } finally {
      set((state) => ({
        dashboardData: {
          ...state.dashboardData,
          loading: false,
        },
      }));
    }
  },
});
