import { useState, useRef } from "react";
import Button from "../components/Button";
import dayjs from "dayjs";
import { useStore } from "../store/useStore";
import { CATEGORIES_TYPE, MIN_DEADLINE_DAYS, USER_ROLE } from "../constants";
import { Navigate, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import { toast } from "react-toastify";
import validateProduct from "../validators/validate-create-project";
import Spinner from "../components/Spinner";
import { motion } from "framer-motion";
import UploadLottie from "../assets/images/upload.json"
import Lottie from "lottie-react";

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
  const { user, role } = useStore((state) => state.authUser);
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
    <div className="bg-creator-normal">
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

      <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <motion.div
          {...slidDownForm}
          className=" h-[657px] bg-white flex flex-col md:flex-row justify-center items-center mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 my-4 sm:my-6 lg:my-8 rounded-lg shadow-[2px_6px_14px_1px_#00000024]"
        >
          <div className="w-full md:w-5/12 flex justify-center p-2 sm:p-4 h-full bg-radomtoon-bright rounded-l-lg round ">
            {file ? (
              <div
                onClick={() => fileEl.current.click()}
                className="w-full flex justify-center items-center"
              >
                <motion.img
                  {...popupImg}
                  src={URL.createObjectURL(file)}
                  className="object-cover aspect-[16/9] rounded-xl"
                  alt="product"
                />
              </div>
            ) : (
              <div
                role="button"
                className="w-3/5 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 hover:rounded-xl hover:scale-105 duration-500"
                onClick={() => fileEl.current.click()}
              >
                <div className="h-full">
                <div className="w-full scale-[200%] py-20">
                  <Lottie animationData={UploadLottie} loop={true} />
                </div>

                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                  Add product image
                </h3>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmitForm}
            className=" flex flex-col gap-2 bg-white rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl w-full md:w-7/12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8"
          >
            <h1 className="flex justify-center text-radomtoon-bright text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3">
              PROJECT SETUP
            </h1>

            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
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
            <div className="hidden sm:flex gap-6 h-full">
              <div className="flex flex-col w-2/6">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
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
                <label className="form-control w-full">
                  <div className="label">
                    <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
                      Deadline
                    </span>
                  </div>
                  <input
                    type="date"
                    value={dayjs(input.deadline).format("YYYY-MM-DD")}
                    name="deadline"
                    onChange={handleInputChange}
                    className={`bg-gray-50 border ${
                      inputError.deadline ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm sm:text-base md:text-lg rounded-lg block p-2.5 w-full`}
                  />
                  {inputError.deadline && (
                    <small className="text-red-500 font-semibold">
                      {inputError.deadline}
                    </small>
                  )}
                </label>
                <label className="form-control ">
                  <div className="label">
                    <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
                      Category
                    </span>
                  </div>
                  <div className="h-10">
                    <Dropdown
                      data={CATEGORIES_TYPE.map((el) => el.name)}
                      onChange={handleCategoryChange}
                      title="Choose your category..."
                    />
                  </div>
                </label>
              </div>
              <label className="form-control w-4/6">
                <div className="label">
                  <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
                    Summary Detail
                  </span>
                </div>
                <textarea
                  placeholder="Please fill summary detail"
                  name="summaryDetail"
                  value={input.summaryDetail}
                  onChange={handleInputChange}
                  className={`placeholder-gray-400 indent-1 h-full border ${
                    inputError.summaryDetail ? "border-red-500" : "border-gray-300"
                  } text-gray-500 text-sm sm:text-base rounded-lg block p-2.5 w-full`}
                ></textarea>
                {inputError.summaryDetail && (
                  <small className="text-red-500 font-semibold">
                    {inputError.summaryDetail}
                  </small>
                )}
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
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

            <div className="py-4 flex justify-center">
              <Button bg="radomtoon-bright" color="white" width="60">
                Save
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
