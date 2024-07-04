import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
import Dropdown from "../components/Dropdown";
import { PROVINCE_MAP } from "../constants";
import Policy from "../features/authentication/components/Policy";
import previewImage from "../assets/images/add-image.png";
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
  policy: "",
  address: "",
  provinceId: "",
};

export default function CreatorRegister() {
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [inputError, setInputError] = useState(initialInputError);
  const [openPolicyModal, setOpenPolicyModal] = useState(false);
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      setIsLoading(true);
      e.preventDefault();

      if (!isPolicyChecked) {
        setCheckboxError("You must agree to the policy to continue.");
        return;
      }

      const error = validateRegister(input);

      if (error) {
        setInputError({ ...inputError, ...error });
        return;
      }

      setInputError({ ...initialInputError });

      if (!file) {
        toast.error("Please upload identity image");
        return;
      }

      const formData = new FormData();
      formData.append("identityImage", file);

      for (const [key, value] of Object.entries(input)) {
        if (value) {
          formData.append(key, value);
        }
      }

      await authApi.creatorRegister(formData);

      toast.success("Registered successfully, wait admin approval", {
        position: "bottom-right",
        autoClose: 2000,
      });
      navigate("/login");
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorField = err.response.data.field;
        const errorMessage = {
          email: "Email is already in use",
          phone: "Phone number is already in use",
        }[errorField];

        if (errorMessage) {
          setInputError((prevInputError) => ({
            ...prevInputError,
            [errorField]: errorMessage,
          }));
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner transparent />}
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
      ></input>
      <div className="min-w-screen min-h-screen">
        <div className="grid grid-cols-2 shadow-lg rounded-lg bg-cyan-100">
          <div className="px-20  flex w-full h-full flex-col justify-center">
            <h1 className="text-4xl text-center mb-2 font-bold text-radomtoon-dark">
              Bring your imagination to life
            </h1>
            <h2 className="text-center text-gray-600 mb-8">
              A hub for visionaries to explore cutting-edge technology early.
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="grid grid-col-2 gap-x-4 gap-y-2">
                  <div>
                    <Input
                      type="text"
                      placeholder="First name"
                      value={input.firstName}
                      name="firstName"
                      onChange={handleChangeInput}
                      error={inputError.firstName}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last name"
                      value={input.lastName}
                      name="lastName"
                      onChange={handleChangeInput}
                      error={inputError.lastName}
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="text"
                      placeholder="Email"
                      value={input.email}
                      name="email"
                      onChange={handleChangeInput}
                      error={inputError.email}
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="text"
                      placeholder="Phone number"
                      value={input.phone}
                      name="phone"
                      onChange={handleChangeInput}
                      error={inputError.phone}
                    />
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={input.password}
                        name="password"
                        onChange={handleChangeInput}
                        error={inputError.password}
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        value={input.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChangeInput}
                        error={inputError.confirmPassword}
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <Input
                      type="text"
                      placeholder="Address"
                      value={input.address}
                      name="address"
                      onChange={handleChangeInput}
                      error={inputError.address}
                    />
                  </div>
                  <div className="col-span-2 w-full h-12">
                    <Dropdown
                      data={PROVINCE_MAP.map((el) => el.name)}
                      onChange={handleProvinceChange}
                      title="Choose your province..."
                    />
                  </div>
                </div>

                <div className="flex items-center py-4">
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
                    <a
                      onClick={() => setOpenPolicyModal(true)}
                      className="text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                {checkboxError && (
                  <p className="text-red-500 text-sm mb-4">{checkboxError}</p>
                )}

                <Button
                  width={"full"}
                  height="14"
                  bg="creator-saturate"
                  color="white"
                >
                  Request Approve
                </Button>
              </div>
            </form>
          </div>
          <div className="h-screen w-full flex flex-col items-center justify-center ">
            <h3 className="text-4xl text-center font-bold text-radomtoon-dark">
              Identity Image Preview
            </h3>
            {file ? (
              <div
                className=" flex items-center justify-center w-full p-16"
                onClick={() => fileEl.current.click()}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected"
                  className="object-cover aspect-[16/9] w-full rounded-xl"
                />
              </div>
            ) : (
              <div
                className=" flex flex-col items-center justify-center m-8 bg-[#3a96a9] p-8 rounded-xl"
                onClick={() => fileEl.current.click()}
              >
                <img
                  src={previewImage}
                  alt="Selected"
                  className="object-cover aspect-square w-1/2 opacity-50"
                />
                <div className="text-2xl font-bold text-center">
                  Add your identity card with your image
                </div>
              </div>
            )}
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
