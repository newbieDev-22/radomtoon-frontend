import { USER_ROLE } from "../../../constants";
import { Navigate, useParams, useLocation } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useStore } from "../../../store/useStore";

export default function ProtectRouteCreator({ children }) {
  const { productId } = useParams();
  const location = useLocation();
  const { role, loading, user } = useStore((state) => state.authUser);
  const userId = user?.id;
  const product = useStore((state) => state.product.data);

  if (role !== USER_ROLE.CREATOR) {
    return <Navigate to="/" />;
  }
  if (location.pathname !== "/creator-campaign-setup") {
    const foundedCreator = product?.findIndex(
      (el) => el.id === +productId && el.creatorId === userId
    );

    if (role !== USER_ROLE.CREATOR || foundedCreator === -1) {
      return <Navigate to="/" />;
    }
  }

  return (
    <>
      {loading && <Spinner transparent />}
      {children}
    </>
  );
}
