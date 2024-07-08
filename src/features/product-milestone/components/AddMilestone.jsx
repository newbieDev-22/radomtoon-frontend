import { useState } from "react";
import Button from "../../../components/Button";
import { useStore } from "../../../store/useStore";
import Spinner from "../../../components/Spinner";
import validateMilestone from "../../../validators/validate-milestone";

export default function AddMilestone({
  name,
  milestoneData,
  isCreator,
  isApproved,
}) {
  const [input, setInput] = useState({
    milestoneDetail: milestoneData?.milestoneDetail || "",
  });
  const [inputError, setInputError] = useState({ milestoneDetail: "" });

  const [isEditing, setIsEditing] = useState(false);
  const milestoneUpdateInfo = useStore((state) => state.milestoneUpdateInfo);
  const productLoading = useStore((state) => state.productLoading);

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const error = validateMilestone(input);
      if (error) {
        return setInputError(error);
      }

      setInputError({ milestoneDetail: "" });
      await milestoneUpdateInfo(milestoneData.id, input);
      setIsEditing(!isEditing);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {productLoading && <Spinner transparent />}
      <div className="w-3/4 h-80 flex flex-col items-center justify-between rounded-2xl shadow-lg mt-2">
        <span className={`text-2xl font-bold text-center ${!isApproved ? "bg-gray-300":"text-white bg-[#00d7c0]"} w-full p-4 rounded-tr-2xl rounded-tl-2xl`}>
          {name}
        </span>

        {isEditing ? (
          <div className="flex flex-col w-full p-4">
            <textarea
              rows="6"
              placeholder="Write your Milestone detail"
              name="milestoneDetail"
              value={input.milestoneDetail}
              onChange={handleInputChange}
              className="focus:outline-none rounded-md my-4 px-6 h-full w-full"
            />
            {inputError.milestoneDetail && (
              <small className="text-red-500 font-semibold">
                {inputError.milestoneDetail}
              </small>
            )}
          </div>
        ) : (
          <div className="h-full w-full my-4 px-10 p-5 overflow-auto text-[#949494]">
            <p>{input.milestoneDetail}</p>
          </div>
        )}
        {isCreator && !isApproved && (

          <div className="flex gap-2 mb-4">
            {isEditing ? (
              <Button bg="creator-normal" width="40" onClick={handleSubmit} rounded={1}>
                Save
              </Button>
            ) : (
              <Button
                bg="creator-normal"
                width="40"
                onClick={() => setIsEditing(true)}
                rounded={1}
              >
                Edit
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
