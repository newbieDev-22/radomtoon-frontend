import { useState } from "react";
import Button from "../components/Button";
import { useStore } from "../store/useStore";
import Spinner from "../components/Spinner";
import validateMilestone from "../validators/validate-milestone";

export default function NewAddMilestone({
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
      <div className="w-[500px] h-80 flex flex-col items-center justify-between rounded-3xl shadow-lg">
        <span className="text-2xl font-bold text-center text-white bg-creator-saturate w-full p-2 rounded-tr-3xl rounded-tl-3xl">
          {name}
        </span>

        {isEditing ? (
          <div className="flex flex-col">
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
          <div className="h-full w-full my-4 px-6 overflow-auto text-[#949494]">
            <p>{input.milestoneDetail}</p>
          </div>
        )}
        {isCreator && !isApproved && (
          <div className="mb-4">
            <Button
              bg="creator-normal"
              width="40"
              onClick={handleSubmit}
              rounded={1}
            >
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
