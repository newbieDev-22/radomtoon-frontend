import { useState } from "react";
import Button from "../../../components/Button";

export default function CreateEditProfile() {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (

    <form onSubmit={onSubmit}>
      <div className="flex justify-center ">
        <div className="flex justify-center flex-row gap-10 mt-6 w-2/4 mb-10 ">
          <span>Biography</span>
          <div>
            {isEditing ? (
              <textarea
                rows="6"
                placeholder="Write your biography"
                name="content"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-96 border border-solid-2 rounded-md p-2 max-h-64 min-h-12 "
              />
            ) : (
              <div className="w-96 h-full">
                <p>{note || "No biography available"}</p>
              </div>
            )}
          </div>
          <Button
            type="submit"
            width='40'
            bg="creator-normal"
            
          >
            {isEditing ? "Save" : "Edit"}
            </Button>
        </div>
      </div>
    </form>

  );
}
