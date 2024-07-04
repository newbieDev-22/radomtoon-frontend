import { useState, useRef } from "react";
import Button from "../components/Button";
import dayjs from "dayjs";
import { useStore } from "../store/useStore";
import { CATEGORIES_TYPE, MIN_DEADLINE_DAYS, USER_ROLE } from "../constants";
import { Navigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import { PictureIcon } from "../icons";
import { toast } from "react-toastify";
import validateProduct from "../validators/validate-create-project";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const initialInput = {
  productName: "",
  goal: "",
  deadline: "",
  categoryId: 1,
  productVideo: "",
  summaryDetail: "",
};

const initialInputError = {
  productName: "",
  goal: "",
  deadline: "",
  categoryId: "",
  productVideo: "",
  summaryDetail: "",
};

export default function CampaignSetup() {
  const role = useStore((state) => state.authUser.role);
  const user = useStore((state) => state.authUser.user);
  const today = useStore((state) => state.product.today);
  const createProduct = useStore((state) => state.createProduct);
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    ...initialInput,
    deadline: dayjs(today).format("YYYY-MM-DD"),
  });
  const [inputError, setInputError] = useState(initialInputError);
  const productLoading = useStore((state) => state.productLoading);
  const navigate = useNavigate();

  if (role !== USER_ROLE.CREATOR) {
    return <Navigate to="/" />;
  }

  const handleCategoryChange = (value) => {
    const categoryId = CATEGORIES_TYPE.filter((el) => el.name === value).map(
      (el) => el.id
    )[0];
    setInput((prev) => ({ ...prev, categoryId }));
  };

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const todayFormat = dayjs(today);
      const deadlineFormat = dayjs(new Date(input.deadline));
      if (deadlineFormat.diff(todayFormat, "day") < MIN_DEADLINE_DAYS) {
        return setInputError((prev) => ({
          ...prev,
          deadline: "Deadline must be at least 15 days from today.",
        }));
      }

      const error = validateProduct(input);
      if (error) {
        return setInputError(error);
      }

      setInputError(initialInputError);

      if (file) {
        const formData = new FormData();
        formData.append("productImage", file);
        input.deadline = dayjs(input.deadline).format("YYYY-MM-DD");
        for (const [key, value] of Object.entries(input)) {
          if (value) {
            formData.append(key, value);
          }
        }
        await createProduct(formData);
        toast.success("Created project successfully");
        navigate(`/creator-panel/${user.id}`);
      } else {
        toast.error("Please upload your product image");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      {productLoading && <Spinner transparent />}
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
      <div className="flex flex-col justify-center py-8 ">
        <h1 className="text-5xl font-bold m-auto text-center">CREATE YOUR PROJECT</h1>
        <div className="flex justify-center items-center mx-20 my-8">
          <div className="w-2/5 flex justify-center">
            {file ? (
              <div onClick={() => fileEl.current.click()} className="w-full p-16">
                <img
                  src={URL.createObjectURL(file)}
                  className=" object-cover aspect-[16/9] rounded-xl bg-red-200"
                  alt="product"
                />
              </div>
            ) : (
              <div
                role="button"
                className="w-3/5 flex flex-col justify-center items-center"
                onClick={() => fileEl.current.click()}
              >
                <div className="w-full object-cover rounded-lg aspect-[16/9]  opacity-50 ">
                  <PictureIcon />
                </div>
                <h3 className="text-4xl font-semibold">Add product image</h3>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-1 bg-gray-200 rounded-xl w-1/2 px-16 py-8"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-ls">Product name</span>
              </div>
              <Input
                placeholder="Product name"
                name="productName"
                value={input.productName}
                onChange={handleInputChange}
                error={inputError.productName}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-ls">Goal (THB)</span>
              </div>
              <Input
                placeholder="Goals"
                name="goal"
                type="number"
                value={input.goal}
                onChange={handleInputChange}
                error={inputError.goal}
              />
            </label>

            <div className="flex gap-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-gray-500 font-semibold text-ls">Deadline</span>
                </div>
                <input
                  type="date"
                  value={dayjs(input.deadline).format("YYYY-MM-DD")}
                  name="deadline"
                  onChange={handleInputChange}
                  className={`bg-gray-50 border  ${
                    inputError.deadline ? "border-red-500" : "border-gray"
                  } text-gray-900 text-ls rounded-lg block p-2.5 w-full`}
                />
                {inputError.deadline && (
                  <small className="text-red-500 font-semibold">
                    {inputError.deadline}
                  </small>
                )}
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-gray-500 font-semibold text-ls">Category</span>
                </div>
                <Dropdown
                  data={CATEGORIES_TYPE.map((el) => el.name)}
                  onChange={handleCategoryChange}
                  title="Choose your category..."
                />
              </label>
            </div>

            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-ls">
                  Summary Detail
                </span>
              </div>
              <textarea
                placeholder="Please fill summary detail"
                name="summaryDetail"
                value={input.summaryDetail}
                onChange={handleInputChange}
                className={`placeholder-gray-500 indent-1 min-h-24 max-h-24 border ${
                  inputError.summaryDetail ? "border-red-500" : "border-gray"
                }  text-gray-500 text-ls rounded-lg block p-2.5 w-full`}
              ></textarea>
              {inputError.summaryDetail && (
                <small className="text-red-500 font-semibold">
                  {inputError.summaryDetail}
                </small>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-ls">
                  Product video link
                </span>
              </div>
              <Input
                placeholder="Product video link"
                name="productVideo"
                value={input.productVideo}
                onChange={handleInputChange}
                error={inputError.productVideo}
              />
            </label>

            <div className="py-4">
              <Button bg="green" width="full">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
