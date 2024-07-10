import { useEffect } from "react";
import CreatorDashboard from "../features/dashboard/components/CreatorDashboard";
import { useParams } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function CreatorManagePage() {
  const { productId } = useParams();
  const fetchCreatorDashboardData = useStore((state) => state.fetchCreatorDashboardData);

  useEffect(() => {
    if (productId) {
      fetchCreatorDashboardData(productId);
    }
  }, [productId, fetchCreatorDashboardData]);

  return <CreatorDashboard />;
}
