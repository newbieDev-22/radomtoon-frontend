import { useParams } from "react-router-dom";
import ProfileImage from "../features/creator/components/ProfileImage";
import CreatorMenu from "../features/creator/components/CreatorMenu";
import { useStore } from "../store/useStore";

export default function CreatorPanel() {
  const { creatorId } = useParams();
  const selectedCreator = useStore((state) => state.selectCreator(creatorId));

  return (
    <>
      <ProfileImage selectedCreator={selectedCreator} />
      <CreatorMenu selectedCreator={selectedCreator} />
    </>
  );
}
