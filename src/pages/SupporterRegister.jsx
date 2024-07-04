import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
import Dropdown from "../components/Dropdown";
import { PROVINCE_MAP } from "../constants";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import authApi from "../apis/auth";
import { PROVINCE_MAP } from "../constants";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import Policy from "../features/authentication/components/Policy";

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

export default function SupporterRegister() {
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [isLoading, setIsLoading] = useState(false);
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [openPolicyModal, setOpenPolicyModal] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsPolicyChecked(e.target.checked);
    if (e.target.checked) {
      setCheckboxError("");
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleProvinceChange = (value) => {
    const provinceId = PROVINCE_MAP.filter((el) => el.name === value).map(
      (el) => el.id
    )[0];
    setInput((prev) => ({ ...prev, provinceId }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const validationErrors = validateRegister(input);
      if (validationErrors) {
        setInputError({ ...initialInputError, ...validationErrors });
        return;
      }
      setInputError({ ...initialInputError });
      setIsLoading(true);
      await authApi.supporterRegister(input);
      toast.success("Registration successful. Please log in.", {
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
      <div className="min-w-screen min-h-screen">
        <div className="grid grid-cols-2 shadow-lg rounded-lg">
          <div className="relative h-screen w-full group">
            <img
              src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-700 ease-in-out delay-300">
              <button
                onClick={() => navigate("/creator-register")}
                className="text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out delay-500"
              >
                Register as Creator
              </button>
            </div>
          </div>
          <div className="px-20 bg-yellow-100 flex w-full h-full flex-col justify-center">
            <h1 className="text-5xl mb-2 font-semibold text-radomtoon-dark">
              Join the movement.
            </h1>
            <h2 className="text-base mb-8 text-gray-600">
              Become part of a community driving change and innovation.
            </h2>

            <form onSubmit={handleSubmit} action="">
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

                <Button width={"full"} height="14" bg="creator-saturate" color="white">
                  Request Approve
                </Button>
              </div>
            </form>
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
