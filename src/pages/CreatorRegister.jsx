import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
import Dropdown from "../components/Dropdown";
import { PROVINCE_MAP } from "../constants";
import Policy from "../features/authentication/components/Policy";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  address: "",
  provinceId: 1,
};

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  policy: "",
  address: "",
  provinceId: "",
};

export default function CreatorRegister() {
  const navigate = useNavigate();

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openPolicyModal, setOpenPolicyModal] = useState(false);
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

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
    try {
      e.preventDefault();
      if (!isPolicyChecked) {
        setCheckboxError("You must agree to the policy to continue.");
        return;
      }
      const error = validateRegister(input);
      console.log(inputError);
      if (error) {
        return setInputError(error);
      }
      setInputError("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-w-screen min-h-screen">
        <div className="grid grid-cols-2 shadow-lg rounded-lg">
          <div className="px-20 bg-cyan-100 flex w-full h-full flex-col justify-center">
            <h1 className="text-4xl text-center mb-2 font-bold text-radomtoon-dark">
              Bring your imagination to life
            </h1>
            <h2 className="text-center text-gray-600 mb-8">
              A hub for visionaries to explore cutting-edge technology early.
            </h2>
            <form onSubmit={handleSubmit} action="">
              <div className="flex flex-col gap-1">
                <div className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="First name"
                    value={input.firstName}
                    name="firstName"
                    onChange={handleChangeInput}
                    error={inputError.firstName}
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={input.lastName}
                    name="lastName"
                    onChange={handleChangeInput}
                    error={inputError.lastName}
                  />
                </div>

                <Input
                  type="text"
                  placeholder="Email"
                  value={input.email}
                  name="email"
                  onChange={handleChangeInput}
                  error={inputError.email}
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChangeInput}
                  error={inputError.phoneNumber}
                />

                <div className="flex gap-4">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={input.password}
                    name="password"
                    onChange={handleChangeInput}
                    error={inputError.password}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    value={input.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChangeInput}
                    error={inputError.confirmPassword}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Address"
                  value={input.address}
                  name="address"
                  onChange={handleChangeInput}
                  error={inputError.address}
                />

                <Dropdown
                  data={PROVINCE_MAP.map((el) => el.name)}
                  onChange={handleProvinceChange}
                  title="Choose your province..."
                />

                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-[175px] object-cover rounded-lg"
                  />
                ) : (
                  <div>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-center"
                    >
                      <span
                        className={`block mb-10 border-[1.5px] border-gray rounded-lg p-8 bg-gray-200 hover:bg-gray-100 transition duration-300 ${
                          inputError?.password && "mt-1"
                        }`}
                      >
                        + Add your identity card with your image
                      </span>

                      <input
                        hidden="invisible"
                        type="file"
                        id="file-upload"
                        name="file-upload"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                )}

                <div className="flex items-center mb-4">
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
          <div className="relative h-screen w-full group">
            <img
              src="https://plus.unsplash.com/premium_photo-1683749810427-9f460939f702?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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