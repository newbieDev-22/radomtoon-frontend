import { STATUS_PRODUCT } from "../constants";
import CreatorDashboard from "../features/dashboard/components/CreatorDashboard";

const mockProductName = `Bria's Mythical Menagerie: Creature-Collecting & Plush`;
const mockStatus = STATUS_PRODUCT.IN_PROGRESS;

export default function CreatorManagePage() {
  return <CreatorDashboard title={mockProductName} status={mockStatus} />;
}
