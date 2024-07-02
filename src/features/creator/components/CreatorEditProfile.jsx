import { useState } from "react";
import Button from "../../../components/Button";

export default function CreatorEditProfile() {
  const [note, setNote] = useState("");
  const [web, setWeb] = useState("");
  const [isEditing, setIsEditing] = useState("edit");

  const onSubmit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center flex-row gap-10 mt-6 w-2/4 mb-5 border-b-2 h-48 border-gray-300">
        <span>Biography</span>
        <div>
          {isEditing === "note" ? (
            <textarea
              rows="6"
              placeholder="Write your biography"
              name="content"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-96 border border-solid-2 rounded-md p-2 max-h-64 min-h-12"
            />
          ) : (
            <div className="w-96 h-full">
              <p>{note || "No biography available"}</p>
            </div>
          )}
        </div>
        <Button
          type="button"
          onClick={() => onSubmit("note")}
          width="40"
          bg="creator-normal"
        >
          {isEditing === "note" ? "Save" : "Edit"}
        </Button>
      </div>

      {/* edit web-contact */}
      <div className="flex flex-row gap-10 w-2/4 mb-10">
        <span>Website</span>
        <div>
          {isEditing === "web" ? (
            <input
              placeholder="Write your website"
              name="webContact"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
              className="w-96 border border-solid-2 rounded-md p-2 max-h-64 min-h-12"
            />
          ) : (
            <div className="w-96 h-full">
              <p className="underline text-gray-500 font-semibold hover:cursor-pointer">
                {web || "No website available"}
              </p>
            </div>
          )}
        </div>
        <Button
          type="button"
          onClick={() => onSubmit("web")}
          width="20"
          bg="creator-normal"
        >
          {isEditing === "web" ? "Save" : "Edit"}
        </Button>
      </div>
    </div>
  );
}
