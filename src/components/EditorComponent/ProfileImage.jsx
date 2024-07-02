import { useState } from "react";
import { useStore } from "../../store/useStore";
import Modal from "../Modal";
import EditProfilePicture from "../../features/authentication/components/EditProfilePictrue";

export default function ProfileImage() {
  const creator = useStore((state) => state.authUser.user);
  const profileImage = creator.profileImage || null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profileUpload = useStore((state) => state.updateProfileImage);

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-center p-10">
        <div>
          <button
            className="w-56 h-56 rounded-full flex justify-center items-center overflow-hidden bg-white"
            onClick={() => setIsModalOpen(true)}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-8xl">{creator.firstName[0].toUpperCase()}</div>
            )}
          </button>
        </div>
        <span className="text-4xl font-semibold mt-5">
          {`${creator.firstName} ${creator.lastName}`}
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
          creatorFirstLetter={creator.firstName[0].toUpperCase()}
          handleProfileImageSave={profileUpload}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
