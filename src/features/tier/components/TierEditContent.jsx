import { useState, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import previewImage from "../../../assets/images/add-image.png";
import validateTier from "../../../validators/validate-tier";
import { toast } from "react-toastify";
import { useStore } from "../../../store/useStore";
import { useParams } from "react-router-dom";

export default function TierEditContent({
  input,
  inputError,
  setInputError,
  handleInputChange,
  setIsEditing,
  handleDataChange,
  handleValueChange,
}) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const createTier = useStore((state) => state.createTier);
  const updateTier = useStore((state) => state.updateTier);
  const { productId } = useParams();

  const resetInputError = () => {
    setInputError({
      tierName: "",
      price: "",
      tierDetail: "",
      tierImage: "",
      tierRankId: "",
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTierSave = async (e) => {
    try {
      e.preventDefault();
      const dummyInput = { ...input };
      const tierId = dummyInput.id;
      delete dummyInput.id;
      const error = validateTier(dummyInput);
      if (error) {
        return setInputError(error);
      }

      resetInputError();

      if (tierId) {
        delete dummyInput.tierRankId;

        if (file) {
          delete dummyInput.tierImage;
          const formData = new FormData();
          formData.append("tierImage", file);

          for (const [key, value] of Object.entries(dummyInput)) {
            if (value) {
              formData.append(key, value);
            }
          }
          const tierResult = await updateTier(tierId, formData);
          handleValueChange("tierImage", tierResult.tierImage);
          handleDataChange(tierResult.tierRankId, tierResult);
          console.log("first", tierResult.tierRankId, input);
        } else {
          const tierResult = await updateTier(tierId, dummyInput);
          handleDataChange(tierResult.tierRankId, tierResult);
          console.log("first", tierResult.tierRankId, input);
        }
        toast.success("Updated tier successfully");
        setIsEditing(false);
      } else {
        if (file) {
          delete dummyInput.tierImage;
          const formData = new FormData();
          formData.append("tierImage", file);
          for (const [key, value] of Object.entries(dummyInput)) {
            if (value) {
              formData.append(key, value);
            }
          }
          const tierResult = await createTier(productId, formData);
          handleValueChange("tierImage", tierResult.tierImage);
          handleValueChange("id", tierResult.id);
          handleDataChange(tierId, tierResult);
          toast.success("Created tier successfully");
          setIsEditing(false);
        } else {
          toast.error("Please upload your tier image");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <input
        type="file"
        placeholder="Poster image"
        hidden
        ref={fileEl}
        onChange={handleFileChange}
      />
      <div
        className="flex gap-12 shadow-lg items-center border-gray-300 border py-8 px-12 hover:border-gray-500 
  transition-all rounded-xl"
      >
        <div className="flex flex-col justify-center gap-2 w-1/2 py-6 px-8">
          <h1 className="font-semibold text-4xl">Tier {input.tierRankId}</h1>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Tier name</h3>
            <Input
              placeholder="Tier Name"
              name="tierName"
              value={input.tierName}
              onChange={handleInputChange}
              error={inputError.tierName}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Detail</h3>
            <textarea
              placeholder="Please fill tier detail"
              name="tierDetail"
              value={input.tierDetail}
              onChange={handleInputChange}
              className={`placeholder-gray-500 indent-1 min-h-24 max-h-24 border ${
                inputError.tierDetail ? "border-red-500" : "border-gray"
              }  text-gray-500 text-ls rounded-lg block p-2.5 w-full`}
            ></textarea>
            {inputError.tierDetail && (
              <small className="text-red-500 font-semibold">
                {inputError.tierDetail}
              </small>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg">Price</h3>
            <Input
              type="number"
              placeholder="Price in THB"
              name="price"
              value={input?.price}
              onChange={handleInputChange}
              error={inputError.price}
            />
          </div>
          <Button width={"full"} onClick={handleTierSave}>
            Save
          </Button>
        </div>
        <div
          className="flex justify-center items-center w-1/2 rounded-xl h-full"
          onClick={() => fileEl.current.click()}
        >
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="tierImage"
              className="rounded-xl object-cover"
            />
          ) : input.tierImage ? (
            <img
              src={input.tierImage}
              alt="tierImage"
              className="rounded-xl object-cover"
            />
          ) : (
            <img
              src={previewImage}
              alt="tierImage"
              className="object-cover rounded-xl aspect-square w-1/2 opacity-50"
            />
          )}
        </div>
      </div>
    </>
  );
}
