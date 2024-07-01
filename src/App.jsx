import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import Router from "./routes";
import { Suspense, useEffect } from "react";
import { useStore } from "./store/useStore";
export default function App() {
  const fetchProduct = useStore((state) => state.fetchProduct);
  const fetchUser = useStore((state) => state.fetchUser);
  const userLoading = useStore((state) => state.authUser.loading);

  useEffect(() => {
    fetchProduct();
    fetchUser();
  }, []);

  if (userLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Router />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Suspense>
  );
}
