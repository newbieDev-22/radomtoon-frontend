import { useNavigate } from "react-router-dom";

export default function Avatar({ avatarImage, creatorName, creatorId }) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      className="w-1/6"
      onClick={() => navigate(`/creator-panel/${creatorId}`)}
    >
      {avatarImage ? (
        <img src={avatarImage} className="aspect-square rounded-full" alt="Avatar" />
      ) : (
        <div className="w-full aspect-square font-semibold text-xl text-white rounded-full bg-gray-400 flex justify-center items-center">
          {creatorName[0].toUpperCase()}
        </div>
      )}
    </div>
  );
}
