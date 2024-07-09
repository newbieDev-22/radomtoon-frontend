import React from "react";
import { USER_ROLE } from "../../../constants";
import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ProtectRouteCreator({ children }) {
  const { productId } = useParams();
  const location = useLocation();
  const role = useStore((state) => state.authUser?.role);
  const isLoading = useStore((state) => state.authUser.loading);
  const authUserId = useStore((state) => state.authUser.user?.id);
  const product = useStore((state) => state.product.data);

  if (role !== USER_ROLE.CREATOR) {
    return <Navigate to="/" />;
  }
  if (location.pathname !== "/creator-campaign-setup") {
    const foundedCreator = product?.findIndex(
      (el) => el.id === +productId && el.creatorId === authUserId
    );

    if (role !== USER_ROLE.CREATOR || foundedCreator === -1) {
      return <Navigate to="/" />;
    }
  }

  return (
    <>
      {isLoading && <Spinner transparent />}
      {children}
    </>
  );
}
