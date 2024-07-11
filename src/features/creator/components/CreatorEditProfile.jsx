import { useState } from "react";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";
import { USER_ROLE } from "../../../constants";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function CreatorEditProfile() {
  const { creatorId } = useParams();
  const { user, role } = useStore((state) => state.authUser);
  const updateInfo = useStore((state) => state.updateInfo);
  const updateCreatorUser = useStore((state) => state.updateCreatorUser);
  const selectedCreator = useStore((state) => state.selectCreator(creatorId));
  const initialInput = {
    biography: selectedCreator.biography || "",
    website: selectedCreator.website || "",
  };

  const [aboutInput, setAboutInput] = useState(initialInput);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setAboutInput({
      biography: selectedCreator.biography || "",
      website: selectedCreator.website || "",
    });
  }, [creatorId, selectedCreator]);

  const handleOnSave = async () => {
    try {
      await updateInfo(aboutInput);
      updateCreatorUser(creatorId, aboutInput);
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleContentChange = (e) => {
    setAboutInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="py-4 md:w-3/5 sm:w-full m-auto my-8">
        <div className="w-full flex flex-col gap-4 px-20">
          <div className="flex flex-col gap-4">
            <div className="w-full flex items-start gap-10 mb-2">
              <p className="text-lg font-semibold ">Biography</p>
              {isEditing ? (
                <textarea
                  rows="6"
                  placeholder="Write your biography"
                  name="biography"
                  value={aboutInput.biography}
                  onChange={handleContentChange}
                  className="w-full outline-none border border-gray-300 rounded-md py-2 px-4 min-h-48 max-h-48 col-span-6"
                />
              ) : (
                <div className="w-full h-auto">
                  <p>{aboutInput.biography}</p>
                </div>
              )}

              {/* button */}
              {role === USER_ROLE.CREATOR && user.id === +creatorId ? (
                isEditing ? (
                  <Button onClick={handleOnSave}>Save</Button>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>Edit</Button>
                )
              ) : null}
              {/*end button */}
            </div>
            <div className="border"></div>
            <div className="w-full grid grid-cols-7 mt-2">
              <span className="text-lg font-semibold text-gray-800 flex items-center">
                Website
              </span>
              {isEditing ? (
                <input
                  placeholder="Write your website"
                  name="website"
                  value={aboutInput.website}
                  onChange={handleContentChange}
                  className="w-full outline-none rounded-md py-2 px-4 border border-gray-300 col-span-6"
                />
              ) : (
                <div className="w-full outline-none rounded-md py-2 px-4 col-span-6 text-justify">
                  <p>{aboutInput.website}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
