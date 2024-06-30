import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";
import Router from "./routes";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
      <ToastContainer position="top-right" autoClose={2000} />
    </Suspense>
  );
}
