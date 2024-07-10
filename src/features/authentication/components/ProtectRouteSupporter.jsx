import { useStore } from "../../../store/useStore";
import { USER_ROLE } from "../../../constants";
import Spinner from "../../../components/Spinner";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectRouteSupporter({ children }) {
  const { role, loading } = useStore((state) => state.authUser);
  const { productId } = useParams();
  const histories = useStore((state) => state.supporter.history);
  const filterHistory = histories?.filter((el) => el.productId === +productId);
  const isSupported = role === USER_ROLE.SUPPORTER && filterHistory.length > 0;

  if (role !== USER_ROLE.SUPPORTER || isSupported) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {loading && <Spinner transparent />}
      {children}
    </>
  );
}
