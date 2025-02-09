import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import Router from "./routes";
import { Suspense, useEffect } from "react";
import { useStore } from "./store/useStore";
import { USER_ROLE } from "./constants";

export default function App() {
  const fetchProduct = useStore((state) => state.fetchProduct);
  const { user, role, userLoading } = useStore((state) => state.authUser);
  const fetchUser = useStore((state) => state.fetchUser);
  const fetchCreatorProduct = useStore((state) => state.fetchCreatorProduct);
  const fetchCreatorUser = useStore((state) => state.fetchCreatorUser);
  const resetCreatorProduct = useStore((state) => state.resetCreatorProduct);
  const fetchWaitingApproval = useStore((state) => state.fetchWaitingApproval);
  const waitingApprovalLoading = useStore((state) => state.waitingApproval.loading);
  const { product, productLoading } = useStore((state) => state.product);
  const creatorUserLoading = useStore((state) => state.creatorUser.loading);
  const creatorProductLoading = useStore((state) => state.creatorProduct.loading);
  const fetchDashboardData = useStore((state) => state.fetchDashboardData);
  const dashboardDataLoading = useStore((state) => state.dashboardData.loading);
  const fetchComment = useStore((state) => state.fetchComment);
  const commentLoading = useStore((state) => state.comments.loading);
  const statsLoading = useStore((state) => state.stats.loading);
  const fetchStats = useStore((state) => state.fetchStats);
  const fetchHistory = useStore((state) => state.fetchHistory);
  const historyLoading = useStore((state) => state.supporter.loading);
  const fetchFiveProduct = useStore((state) => state.fetchFiveProduct);

  useEffect(() => {
    const fetch = async () => {
      fetchProduct();
      fetchUser();
      fetchComment();
      fetchStats();
      fetchCreatorUser();
      fetchFiveProduct();
    };
    fetch();
  }, [
    fetchProduct,
    fetchUser,
    fetchComment,
    fetchStats,
    fetchFiveProduct,
    fetchCreatorUser,
  ]);

  useEffect(() => {
    if (role === USER_ROLE.ADMIN) {
      const fetch = async () => {
        fetchWaitingApproval();
        fetchDashboardData();
      };
      fetch();
    }
  }, [fetchWaitingApproval, fetchDashboardData, role]);

  useEffect(() => {
    if (role === USER_ROLE.SUPPORTER) {
      fetchHistory();
    }
  }, [fetchHistory, role]);

  useEffect(() => {
    const fetch = async () => {
      fetchStats();
      fetchFiveProduct();
    };
    fetch();
  }, [historyLoading, fetchStats, fetchFiveProduct]);

  useEffect(() => {
    const fetch = async () => {
      if (role === USER_ROLE.CREATOR) {
        fetchCreatorProduct();
      } else {
        resetCreatorProduct();
      }
    };
    fetch();
  }, [user, product, fetchCreatorProduct, resetCreatorProduct, role]);

  useEffect(() => {
    const fetch = async () => {
      if (role === USER_ROLE.CREATOR) {
        fetchCreatorUser();
      }
    };
    fetch();
  }, [user, fetchCreatorUser, role]);

  if (
    userLoading ||
    productLoading ||
    creatorUserLoading ||
    creatorProductLoading ||
    waitingApprovalLoading ||
    dashboardDataLoading ||
    commentLoading ||
    statsLoading ||
    historyLoading
  ) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Router />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Suspense>
  );
}
