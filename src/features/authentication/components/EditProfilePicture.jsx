import { useState, useRef } from "react";
import Button from "../../../components/Button";
import { toast } from "react-toastify";

export default function EditProfilePicture({
  profileImage,
  creatorFirstLetter,
  handleProfileImageSave,
  onSuccess,
}) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const handleSave = async () => {
    try {
      if (!file) {
        return toast.error("Please select a image to upload");
      }

      const formData = new FormData();
      formData.append("profileImage", file);
      await handleProfileImageSave(formData);
      toast.success("Profile image updated successfully");
      onSuccess();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
        type="file"
        hidden
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-center">
          <button
            className="w-56 h-56 rounded-full flex justify-center items-center overflow-hidden outline-none hover:outline-none bg-white focus:outline-none"
            onClick={() => fileEl.current.click()}
          >
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-8xl">{creatorFirstLetter}</div>
            )}
          </button>
        </div>
        <div className="w-full">
          {file ? (
            <Button width={"full"} onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button width={"full"} onClick={() => fileEl.current.click()}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
