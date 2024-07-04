import { useState } from "react";
import Button from "../../../components/Button";
import validateReject from "../../../validators/validate-reject";
import { toast } from "react-toastify";

export default function RejectApproval({ pendingFailedId, onClose, productFailed }) {
  const [input, setInput] = useState({ comment: "" });
  const [inputError, setInputError] = useState({ comment: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateReject(input);
    if (error) {
      return setInputError(error);
    }
    setInputError({ comment: "" });

    await productFailed(pendingFailedId, input);
    toast.success("Product rejected successfully");
    onClose();
  };

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <p className="mb-2">Decline reason</p>
      <div>
        <textarea
          className="w-full min-h-56 max-h-56 rounded-lg p-3 border-[1.5px] border-gray-200 outline-none"
          name="comment"
          placeholder="Please fill your decline reason..."
          value={input.comment}
          onChange={handleInputChange}
        />
        {inputError.comment && (
          <small className="text-red-500 font-semibold">{inputError.comment}</small>
        )}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button
          width={"small"}
          bg={"white"}
          border={"supporter-normal"}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button width={"large"} bg={"supporter-saturate"} color={"black"}>
          Confirm
        </Button>
      </div>
    </form>
  );
}
