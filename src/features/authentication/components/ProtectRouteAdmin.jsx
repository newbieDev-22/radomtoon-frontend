import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { USER_ROLE } from "../../../constants";
import { useStore } from "../../../store/useStore";

export default function ProtectRouteAdmin({ children }) {
  const role = useStore((state) => state.authUser.role);
  const isLoading = useStore((state) => state.authUser.loading);

  if (role !== USER_ROLE.ADMIN) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoading && <Spinner transparent />}
      {children}
    </>
  );
}
