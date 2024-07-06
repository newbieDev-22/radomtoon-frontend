import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import Router from "./routes";
import { Suspense, useEffect } from "react";
import { useStore } from "./store/useStore";
import { USER_ROLE } from "./constants";
export default function App() {
  const fetchProduct = useStore((state) => state.fetchProduct);
  const role = useStore((state) => state.authUser.role);
  const fetchUser = useStore((state) => state.fetchUser);
  const fetchCreatorProduct = useStore((state) => state.fetchCreatorProduct);
  const fetchCreatorUser = useStore((state) => state.fetchCreatorUser);
  const resetCreatorProduct = useStore((state) => state.resetCreatorProduct);
  const fetchWaitingApproval = useStore((state) => state.fetchWaitingApproval);
  const WaitingApprovalLoading = useStore((state) => state.waitingApproval.loading);
  const productLoading = useStore((state) => state.product.loading);
  const userLoading = useStore((state) => state.authUser.loading);
  const creatorUserLoading = useStore((state) => state.creatorUser.loading);
  const creatorProductLoading = useStore((state) => state.creatorProduct.loading);
  const fetchComment = useStore((state) => state.fetchComment);
  const commentLoading = useStore((state) => state.comments.loading);
  const statsLoading = useStore((state) => state.stats.loading);
  const fetchStats = useStore((state) => state.fetchStats);
  const fetchHistory = useStore((state) => state.fetchHistory);
  const historyLoading = useStore((state) => state.supporter.loading);
  const user = useStore((state) => state.authUser.user);
  const product = useStore((state) => state.product.data);

  useEffect(() => {
    fetchProduct();
    fetchUser();
    fetchCreatorUser();
    fetchComment();
    fetchStats();
  }, [fetchProduct, fetchUser, fetchCreatorUser, fetchComment, fetchStats]);

  useEffect(() => {
    if (role === USER_ROLE.ADMIN) {
      fetchWaitingApproval();
    }
  }, [fetchWaitingApproval, role]);

  useEffect(() => {
    if (role === USER_ROLE.SUPPORTER) {
      fetchHistory();
    }
  }, [fetchHistory, role]);

  useEffect(() => {
    fetchCreatorUser();
  }, [user, product, fetchCreatorUser]);

  useEffect(() => {
    if (role === USER_ROLE.CREATOR) {
      fetchCreatorProduct();
    } else {
      resetCreatorProduct();
    }
  }, [fetchCreatorProduct, resetCreatorProduct, role]);

  if (
    userLoading ||
    productLoading ||
    creatorUserLoading ||
    creatorProductLoading ||
    WaitingApprovalLoading ||
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
