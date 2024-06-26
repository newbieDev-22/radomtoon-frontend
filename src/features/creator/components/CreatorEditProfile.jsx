import { useState } from "react";

export default function CreateEditProfile() {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-row justify-center w-full border-b-1 shadow-md pb-4">
        <button className="outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all">
          About
        </button>
        <button className="outline-none px-6 py-2 m-2 hover:rounded-md hover:bg-gray-300 focus:outline-none hover:scale-110 active:scale-100 transition-all">
          Created
        </button>
      </div>

      <form onSubmit={onSubmit}>
        <div className="flex justify-center">
          <div className="flex justify-center flex-row gap-10 mt-6 w-2/4">
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
            <button
              type="submit"
              className="border-solid-1 border-black bg-gray-400 h-5 p-4 flex justify-center items-center rounded-md hover:rounded-md focus:rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            >
              {isEditing ? "Save" : "Edit"} Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
