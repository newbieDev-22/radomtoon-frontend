import { useState } from "react";
import Button from './Button'

export default function AddMilestone({name}) {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    // milestone
        <form onSubmit={onSubmit}>
        <div className="flex justify-center mb-10">
          <div className="flex flex-col gap-2  border  border-gray-400 rounded-md p-2">
            <span className="text-2xl">{name}</span>
            <div>
              {isEditing ? (
                <textarea
                  rows="6"
                  placeholder="Write your Milestone detail"
                  name="content"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-96 h-56 border border-solid-2 rounded-md p-1"
                />
              ) : (
                <div className="w-96 h-56 border rounded-md border-creator-normal p-1">
                <p>{note || "No Milestone available"}</p>
                </div>
              )}
            </div>
            <Button
            bg="creator-normal"
            width='full'
            >
              {isEditing ? "Save" : "Edit"} Milestone
            </Button>
          </div>
        </div>
      </form>

  );
}
