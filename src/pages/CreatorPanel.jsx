import { useParams, Navigate } from "react-router-dom";
import ProfileImage from "../components/EditorComponent/ProfileImage";
import CreatorMenu from "../features/creator/components/CreatorMenu";
import { useStore } from "../store/useStore";

export default function CreatorPanel() {
  const { creatorId } = useParams();
  const selectedCreator = useStore((state) => state.selectCreator(creatorId));

  if (!selectedCreator) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <ProfileImage selectedCreator={selectedCreator} />
      <CreatorMenu selectedCreator={selectedCreator} />
    </>
  );
}
