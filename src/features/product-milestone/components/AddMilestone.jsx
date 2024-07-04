import { useState } from "react";
import Button from "../../../components/Button";

export default function AddMilestone({ name }) {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setSavedNote(note);
    }
    setIsEditing(!isEditing);
  };

  return (
      <div className="w-96 h-96 flex flex-col items-center justify-between border border-gray-300 rounded-3xl p-5">
        <span className="text-2xl font-bold text-center">
          {name}
        </span>

          {isEditing ? (
            <textarea
              rows="6"
              placeholder="Write your Milestone detail"
              name="content"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="focus:outline-none rounded-md my-4 px-6 h-full w-full"
            />
          ) : (
            <div className="h-full w-full my-4 px-6 overflow-auto  text-[#949494]">
              <p>{savedNote || "No information provided"}</p>
            </div>
          )}

        <Button bg="creator-normal" width="40" onClick={handleSubmit} rounded={1}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
  );
}
