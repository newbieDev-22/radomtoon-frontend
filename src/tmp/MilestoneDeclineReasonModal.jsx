import { useState } from "react";
import Button from "../components/Button";
import validateDeclineReason from "../validators/validat-decline-reason";
import { toast } from "react-toastify";

const initialDeclineInput = { declineReason: "" };

export default function MilestoneDeclineReasonModal({ onClose }) {
  const [input, setInput] = useState(initialDeclineInput);
  const [errorInput, setErrorInput] = useState("");

  // const handleSubmiteForm = (e) => {
  //   e.preventDefault();
  //   const error = validateDeclineReason(input);
  //   if (error) {
  //     return setErrorInput(error);
  //   }
  //   setErrorInput(initialInputError);
  //   toast.success("Decline reason has been send");

  //   console.log(error);
  // };

  const handleSubmiteForm = (e) => {
    e.preventDefault();
    const error = validateDeclineReason(input);
    if (error) {
      setErrorInput(error);
      console.log(error);
    } else {
      setErrorInput(errorInput);
      toast.success("Decline reason has been send");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmiteForm} action="">
      <p className="mb-2">Decline reason</p>
      {errorInput?.declineReason && (
        <p className="text-red-500 text-sm">{errorInput.declineReason}</p>
      )}
      <textarea
        className={`mb-4 w-[500px] h-[300px] rounded-lg p-2 border-[1.5px] border-gray-200 outline-none ${
          errorInput?.declineReason ? "border-red-500" : ""
        }`}
        name="declineReason"
        id="declineReason"
        placeholder="Please fill your decline reason..."
        value={input.declineReason}
        onChange={(e) => setInput({ ...input, declineReason: e.target.value })}
      />
      <div className="flex justify-center gap-4 mt-4">
        <Button
          onClick={onClose}
          width={"small"}
          bg={"white"}
          border={"supporter-normal"}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          width={"large"}
          bg={"supporter-saturate"}
          color={"black"}
        >
          Accept
        </Button>
      </div>
    </form>
  );
}
