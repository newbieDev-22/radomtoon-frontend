import adminApi from "../../apis/admin";
import { PROVINCE_MAP_MAPPING } from "../../constants";

export const adminDashboardSlice = (set) => ({
  dashboardData: {
    adminStatsData: [],
    textBlockData: [],
    lineChartData: {},
    doughnutChartData: [],
    barChartData: [],
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
        adminStats,
        activeCreator,
        activeSupporter,
        averageFunds,
        successProjects,
        fundsByMonth,
        projectOverview,
        geoJsonResponse,
        geoJsonPostResponse,
        topFiveCategory,
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
        adminApi.topFiveCategory(),
      ]);

      const mappedIncomingData = {};
      Object.keys(geoJsonPostResponse.data.provinceCount).forEach((key) => {
        const provinceName = PROVINCE_MAP_MAPPING[key];
        if (provinceName) {
          mappedIncomingData[provinceName] = geoJsonPostResponse.data.provinceCount[key];
        }
      });

      const updatedGeoJson = geoJsonResponse.data.features.map((el) => {
        const data = { ...el };
        data.properties = { ...data.properties };
        if (mappedIncomingData.hasOwnProperty(data.properties.name)) {
          data.properties.p = mappedIncomingData[data.properties.name];
        } else {
          data.properties.p = 0;
        }
        return data;
      });

      set((state) => ({
        dashboardData: {
          ...state.dashboardData,
          adminStatsData: adminStats.data,
          textBlockData: [
            activeCreator.data,
            activeSupporter.data,
            averageFunds.data,
            successProjects.data,
          ],
          lineChartData: fundsByMonth.data.cumulativeFundAllMonth,
          doughnutChartData: projectOverview.data,
          geoJsonData: updatedGeoJson,
          barChartData: topFiveCategory.data.productDataAllMonth,
        },
      }));
    } catch (err) {
      console.error(err);
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
