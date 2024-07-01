import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import Router from "./routes";
import { Suspense, useEffect } from "react";
import { useStore } from "./store/useStore";
export default function App() {
  const fetchProduct = useStore((state) => state.fetchProduct);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Router />
      <ToastContainer position="top-right" autoClose={2000} />
    </Suspense>
  );
}
