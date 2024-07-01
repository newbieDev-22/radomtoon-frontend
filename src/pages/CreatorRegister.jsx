import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
import Dropdown from "../components/Dropdown";
import { PROVINCE_MAP } from "../constants";
import Policy from "../features/authentication/components/Policy";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import authApi from "../apis/auth";
import Spinner from "../components/Spinner";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  address: "",
  provinceId: 1,
};

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  address: "",
  provinceId: "",
};

export default function CreatorRegister() {
  const navigate = useNavigate();
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openPolicyModal, setOpenPolicyModal] = useState(false);
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsPolicyChecked(e.target.checked);
    if (e.target.checked) {
      setCheckboxError("");
    }
  };

  const handleProvinceChange = (value) => {
    const provinceId = PROVINCE_MAP.filter((el) => el.name === value).map(
      (el) => el.id
    )[0];
    setInput((prev) => ({ ...prev, provinceId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateRegister(input);
    if (formErrors) {
      setInputError({ ...initialInputError, ...formErrors });
      return;
    }

    setInputError(initialInputError);

    if (!isPolicyChecked) {
      toast.error("You must agree to the policy to continue");
      return;
    }

    if (!file) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("identityImage", file);

    for (const [key, value] of Object.entries(input)) {
      if (value) {
        formData.append(key, value);
      }
    }

    try {
      setIsLoading(true);
      await authApi.creatorRegister(formData);
      toast.success("Creator registered successfully", {
        position: "bottom-right",
        autoClose: 2000,
      });
      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorField = error.response.data.field;
        const errorMessage = {
          email: "Email is already in use",
          phone: "Phone number is already in use",
        }[errorField];
        if (errorMessage) {
          setInputError((prev) => ({ ...prev, [errorField]: errorMessage }));
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner transparent />}

      <div className="min-w-screen min-h-screen">
        <div className="grid grid-cols-2 shadow-lg rounded-lg">
          <div className="px-20 bg-cyan-100 flex w-full h-full flex-col justify-center">
            <h1 className="text-4xl text-center mb-2 font-bold text-radomtoon-dark">
              Bring your imagination to life
            </h1>
            <h2 className="text-center  text-gray-600">
              A hub for visionaries to explore cutting-edge technology early.
            </h2>
            <form onSubmit={handleSubmit} action="">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">First name</span>
                  </div>
                  <Input
                    type="text"
                    placeholder="First name"
                    value={input.firstName}
                    name="firstName"
                    onChange={handleChangeInput}
                    error={inputError.firstName}
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Last name</span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={input.lastName}
                    name="lastName"
                    onChange={handleChangeInput}
                    error={inputError.lastName}
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Email"
                    value={input.email}
                    name="email"
                    onChange={handleChangeInput}
                    error={inputError.email}
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Phone number</span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Phone number"
                    value={input.phone}
                    name="phone"
                    onChange={handleChangeInput}
                    error={inputError.phone}
                  />
                </label>

                <label className="form-control w-full col-span-2">
                  <div className="label">
                    <span className="label-text">Address</span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Address"
                    value={input.address}
                    name="address"
                    onChange={handleChangeInput}
                    error={inputError.address}
                  />
                </label>

                <label className="form-control w-full col-span-2">
                  <div className="label">
                    <span className="label-text">Province</span>
                  </div>
                  <Dropdown
                    data={PROVINCE_MAP.map((el) => el.name)}
                    onChange={handleProvinceChange}
                    title="Choose your province..."
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={input.password}
                    name="password"
                    onChange={handleChangeInput}
                    error={inputError.password}
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Confirm password</span>
                  </div>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    value={input.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChangeInput}
                    error={inputError.confirmPassword}
                  />
                </label>

                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="object-cover rounded-lg col-span-2 aspect-[16/9] my-4"
                  />
                ) : (
                  <div className="col-span-2">
                    <label htmlFor="file-upload" className="cursor-pointer text-center">

                      <span
                        className={`block border-[1.5px] border-gray rounded-lg p-8 my-4 bg-gray-200 hover:bg-gray-100 transition duration-300 ${
                          inputError?.password && "mt-1"
                        }`}
                      >
                        + Add your identity card with your image
                      </span>

                      <input
                        hidden
                        type="file"
                        id="file-upload"
                        name="file-upload"
                        ref={fileEl}
                        onChange={(e) => {
                          handleImageChange(e);
                          if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  </div>
                )}

                <div className="flex items-center col-span-2">
                  <input
                    id="policy-checkbox"
                    type="checkbox"
                    className="mr-2"
                    name="policy"
                    checked={isPolicyChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="policy-checkbox"
                    className="text-gray-600 cursor-pointer text-sm"
                  >
                    I have read, understand and accept the{" "}
                    <button
                      onClick={() => setOpenPolicyModal(true)}
                      className="text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </button>
                  </label>
                </div>
                {checkboxError && (
                  <p className="text-red-500 text-sm mb-4">{checkboxError}</p>
                )}
                <div className="col-span-2 pt-2">
                  <Button width={"full"} height="14" bg="creator-saturate" color="white">
                    Request Approve
                  </Button>
                </div>

              </div>
            </form>
          </div>
          <div className="relative h-screen w-full group">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-700 ease-in-out delay-300">
              <button
                onClick={() => navigate("/supporter-register")}
                className="text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out delay-500"
              >
                Register as Supporter
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openPolicyModal}
        onClose={() => setOpenPolicyModal(false)}
        title="Policy"
        width={80}
      >
        <Policy />
      </Modal>
    </>
  );
}
