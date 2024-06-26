import CreatorEditProfile from "../features/creator/components/CreatorEditProfile";
import CreatorCreatedProduct from "../features/creator/components/CreatorCreatedProduct";

export default function CreatorPanel() {
  return (
    <div>
      <CreatorEditProfile />
      <CreatorCreatedProduct />
    </div>
  );
}
