import React from 'react'
import { useStore } from '../../../store/useStore';
import { USER_ROLE } from '../../../constants';
import Spinner from '../../../components/Spinner';
import { Navigate } from 'react-router-dom';

export default function ProtectRouteSupporter({children}) {
  const role = useStore((state) => state.authUser.role);
  const isLoading = useStore((state) => state.authUser.loading);

  if (role !== USER_ROLE.SUPPORTER) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoading && <Spinner transparent />}
      {children}
    </>
  );
}
