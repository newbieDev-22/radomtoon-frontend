import { useState } from "react";
import Button from "./Button";

export default function EditRewardCard({ name, product_name, estimated_date, price }) {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setNote(value);
      setError("");
    } else {
      setError("Detail cannot exceed 200 characters.");
    }
  };

  return (
    <form className="flex justify-center mt-20">
      <div className="flex justify-center items-center gap-20 mb-20 border w-2/4 h-auto shadow-md border-gray-200 rounded-md py-5">
        <div className="flex flex-col w-72">
          <span className="text-2xl font-bold">{name}</span>
          <span className="text-xl font-bold text-creator-saturate mt-2">
            Product name : <span className="text-gray-500">{product_name}</span>
          </span>
          <div className="mt-2 text-creator-saturate ">
            <span className="font-bold">Product detail :</span>
            {isEditing ? (
              <textarea
                rows="6"
                placeholder="Click to edit your tier detail"
                name="content"
                value={note}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                className="w-full h-20 text-xs border border-solid-2 rounded-md p-1 overflow-y-auto  text-gray-400 font-bold"
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              />
            ) : (
              <div
                className="w-full h-auto p-1 overflow-y-auto "
                onClick={handleFocus}
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              >
                <p className="text-[11px]  text-gray-500 font-bold">
                  {note || "Click to edit your tier detail"}
                </p>
              </div>
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            <div className="mt-2 mb-5">
              <span className="font-bold text-creator-saturate">Estimated Delivery</span>
              <p className="text-[10px] text-gray-500 font-bold">{estimated_date}</p>
            </div>
            <Button Link bg="creator-saturate" width="full" height="11" color="white">
              Pledge {price} BATH
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center w-48 h-56 border border-gray-400 rounded-md">
          <h1>image tier</h1>
        </div>
      </div>
    </form>
  );
}
