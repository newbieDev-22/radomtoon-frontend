import Button from "../../../components/Button";
import { useState } from "react";

export default function EvidenceModalDetail() {
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearEvidence = () => {
    setInput("");
    setSelectedImage(null);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} action="">
      <p className="mb-2">Evidence Detail</p>
      <textarea
        className="mb-4 w-[500px] h-[175px] rounded-lg p-2 border-[1.5px] border-gray-200 outline-none"
        name=""
        id=""
        placeholder="Please fill your evidence detail...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {selectedImage ? (
        <div className="flex flex-col items-center shadow-md">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-[500px] h-[175px] object-cover rounded-lg"
          />
        </div>
      ) : (
        <label htmlFor="file-upload" className="cursor-pointer ">
          <span className="flex justify-center items-center w-[500px] h-[175px] border-[1.5px] border-gray rounded-lg p-8">
            + Add your image Evidence
          </span>

          <input
            hidden="invisible"
            type="file"
            id="file-upload"
            name="file-upload"
            onChange={handleImageChange}
          />
        </label>
      )}
      <div className="flex justify-center gap-4 mt-4">
        <Button
          onClick={handleClearEvidence}
          width={"small"}
          bg={"white"}
          border={"creator-normal"}
        >
          clear
        </Button>
        <Button width={"large"} bg={"creator-saturate"} color={"white"}>
          send evidence to Admin
        </Button>
      </div>
    </form>
  );
}
