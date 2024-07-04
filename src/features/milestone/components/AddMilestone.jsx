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
    <div className="w-full p-2">
      <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2">
        <span className="text-2xl text-center">{name}</span>
        <div>
          {isEditing ? (
            <textarea
              rows="6"
              placeholder="Write your Milestone detail"
              name="content"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border border-solid-2 rounded-md p-4 max-h-64 w-full"
            />
          ) : (
            <div className="w-full max-h-64 p-4 overflow-auto">
              <p>{savedNote || "No Milestone available"}</p>
            </div>
          )}
        </div>
        <Button bg="creator-normal" width="full" onClick={handleSubmit}>
          {isEditing ? "Save" : "Edit"} Milestone
        </Button>
      </div>
    </div>
  );
}
