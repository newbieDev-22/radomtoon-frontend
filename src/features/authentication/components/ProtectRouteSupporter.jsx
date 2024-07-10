import { useStore } from "../../../store/useStore";
import { USER_ROLE } from "../../../constants";
import Spinner from "../../../components/Spinner";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectRouteSupporter({ children }) {
  const role = useStore((state) => state.authUser.role);
  const { productId } = useParams();
  const isLoading = useStore((state) => state.authUser.loading);
  const histories = useStore((state) => state.supporter.history);
  const filterHistory = histories?.filter((el) => el.productId === +productId);
  const isSupported = role === USER_ROLE.SUPPORTER && filterHistory.length > 0;

  if (role !== USER_ROLE.SUPPORTER || isSupported) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoading && <Spinner transparent />}
      {children}
    </>
  );
}
