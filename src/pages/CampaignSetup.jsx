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
import { motion } from "framer-motion";

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

const popupImg = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", duration: 0.6, ease: "easeOut" },
};

const slidDownForm = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", duration: 0.6, ease: "easeOut" },
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

      <div className="flex flex-col justify-center p-10   ">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mx-auto text-center mb-3">
          CREATE YOUR PROJECT
        </h1>

        <motion.div
          {...slidDownForm}
          className="bg-white flex flex-col md:flex-row justify-center items-center mx-4 md:mx-12 lg:mx-20 my-8 rounded-3xl shadow-[2px_6px_14px_1px_#00000024]"
        >
          <div className="w-full md:w-1/2 flex justify-center p-4 ">
            {file ? (
              <div onClick={() => fileEl.current.click()} className="w-full">
                <motion.img
                  {...popupImg}
                  src={URL.createObjectURL(file)}
                  className="object-cover aspect-[16/9] rounded-xl bg-red-200"
                  alt="product"
                />
              </div>
            ) : (
              <div
                role="button"
                className="w-3/5 flex flex-col justify-center items-center p-10 hover:rounded-xl hover:scale-105 duration-500"
                onClick={() => fileEl.current.click()}
              >
                <img
                  src="https://img.freepik.com/premium-vector/upload-file-flat-illustration_120816-71603.jpg?w=996"
                  alt=""
                />
                <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                  Add product image
                </h3>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-1 bg-[#e7f5fc]  rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl w-full md:w-1/2 px-4 md:px-8 lg:px-16 py-8"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-sm md:text-base lg:text-lg">
                  Product name
                </span>
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
                <span className="text-gray-500 font-semibold text-sm md:text-base lg:text-lg">
                  Goal (THB)
                </span>
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

            <div className="flex flex-col md:flex-row gap-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-gray-500 font-semibold text-sm md:text-base lg:text-lg">
                    Deadline
                  </span>
                </div>
                <input
                  type="date"
                  value={dayjs(input.deadline).format("YYYY-MM-DD")}
                  name="deadline"
                  onChange={handleInputChange}
                  className={`bg-gray-50 border  ${
                    inputError.deadline ? "border-red-500" : "border-gray"
                  } text-gray-900 text-sm md:text-base lg:text-lg rounded-lg block p-2.5 w-full`}
                />
                {inputError.deadline && (
                  <small className="text-red-500 font-semibold">
                    {inputError.deadline}
                  </small>
                )}
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-gray-500 font-semibold text-sm md:text-base lg:text-lg">
                    Category
                  </span>
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
                <span className="text-gray-500 font-semibold text-sm md:text-base lg:text-lg">
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
                }  text-gray-500 text-sm md:text-base lg:text-lg rounded-lg block p-2.5 w-full`}
              ></textarea>
              {inputError.summaryDetail && (
                <small className="text-red-500 font-semibold">
                  {inputError.summaryDetail}
                </small>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-sm md:text-base lg:text-lg">
                  Product video link &#40;optional&#41;
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
              <Button bg="creator-saturate" color="white" width="full">
                Save
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
