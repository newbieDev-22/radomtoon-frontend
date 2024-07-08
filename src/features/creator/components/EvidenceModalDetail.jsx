import { useRef } from "react";
import { useState } from "react";
import Button from "../../../components/Button";
import validateEvidenceMilestone from "../../../validators/validate-evidence-milestone";
import { toast } from "react-toastify";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";

export default function EvidenceModalDetail({ milestoneRankId }) {
  const { productId } = useParams();
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const creatorProductData = useStore((state) => state.creatorProduct.data);
  const sendMilestoneEvidence = useStore(
    (state) => state.sendMilestoneEvidence
  );
  const milestoneEvidenceLoading = useStore(
    (state) => state.milestoneEvidenceLoading
  );


  const productData = creatorProductData
    .filter((el) => el.id === +productId)
    .map((el) => el.productMilestones)[0];

  const milestoneData = productData.filter(
    (el) => el.milestoneRankId === +milestoneRankId
  )[0];


  const [input, setInput] = useState({
    evidenceTextDetail: milestoneData.evidenceTextDetail || "",
  });
  const [inputError, setInputError] = useState({ evidenceTextDetail: "" });

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleClearEvidence = () => {
    setInput({ evidenceTextDetail: "" });
    setInputError({ evidenceTextDetail: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const error = validateEvidenceMilestone(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ evidenceTextDetail: "" });
      if (!file ) {
        toast.error("Evidence image is required");
        return;
      }
        const formData = new FormData();
        formData.append("evidenceImage", file);
        for (const [key, value] of Object.entries(input)) {
          if (value) {
            formData.append(key, value);
          }
        }
        await sendMilestoneEvidence(
          milestoneData.id,
          formData,
          productId,
          milestoneRankId
        );
      
      toast.success("Milestone evidence sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="mb-2">Evidence Detail</p>
        <div className="flex flex-col gap-2">
          <textarea
            className="mb-4 w-[500px] h-[175px] rounded-lg p-2 border-[1.5px] border-gray-200 outline-none"
            name="evidenceTextDetail"
            placeholder="Please fill your evidence detail...."
            value={input.evidenceTextDetail}
            onChange={handleInputChange}
          />
          {inputError.evidenceTextDetail && (
            <small className="text-red-500 font-semibold">
              {inputError.evidenceTextDetail}
            </small>
          )}
        </div>
        <div onClick={() => fileEl.current.click()}>
          {file ? (
            <div className="flex flex-col items-center shadow-md">
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded"
                className="w-[500px] h-[175px] object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className="cursor-pointer ">
              <span className="flex justify-center items-center w-[500px] h-[175px] border-[1.5px] border-gray rounded-lg p-8">
                + Add your image Evidence
              </span>
            </div>
          )}
        </div>

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
      <input
        type="file"
        placeholder="Poster image"
        hidden
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
    </>
  );
}
