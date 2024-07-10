import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { USER_ROLE } from "../../../constants";
import { useStore } from "../../../store/useStore";

export default function ProtectRouteAdmin({ children }) {
  const { role, loading } = useStore((state) => state.authUser);

  if (role !== USER_ROLE.ADMIN) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {loading && <Spinner transparent />}
      {children}
    </>
  );
}
