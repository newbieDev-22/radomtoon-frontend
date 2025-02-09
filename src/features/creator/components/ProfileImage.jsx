import { useState } from "react";
import { useStore } from "../../../store/useStore";
import Modal from "../../../components/Modal";
import EditProfilePicture from "../../authentication/components/EditProfilePicture";
import { USER_ROLE } from "../../../constants";
import { useParams } from "react-router-dom";

export default function ProfileImage({ selectedCreator }) {
  const { user, role } = useStore((state) => state.authUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profileUpload = useStore((state) => state.updateProfileImage);
  const { creatorId } = useParams();
  const isCorrectCreator = user?.id === +creatorId && role === USER_ROLE.CREATOR;
  const profileImage = isCorrectCreator
    ? user?.profileImage
    : selectedCreator.profileImage || null;

  const handleModalOpen = () => {
    if (role === USER_ROLE.CREATOR && user?.id === selectedCreator.id) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className="bg-gradient-to-r from-radomtoon-dark to-radomtoon-bright 
      flex flex-col items-center justify-center p-10 text-white"
      >
        <div>
          <button
            className="w-56 h-56 rounded-full flex justify-center items-center overflow-hidden bg-gray-400 outline-none"
            onClick={handleModalOpen}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-9xl font-semibold text-white">
                {selectedCreator.firstName[0].toUpperCase()}
              </div>
            )}
          </button>
        </div>
        <span className="text-4xl font-semibold mt-5">
          {`${selectedCreator.firstName} ${selectedCreator.lastName}`}
        </span>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Profile Image"
        width={30}
      >
        <EditProfilePicture
          profileImage={profileImage}
          creatorFirstLetter={selectedCreator.firstName[0].toUpperCase()}
          handleProfileImageSave={profileUpload}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
