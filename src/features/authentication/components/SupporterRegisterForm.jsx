import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import validateRegister from "../../../validators/validate-register";
import Dropdown from "../../../components/Dropdown";
import { PROVINCE_MAP } from "../../../constants";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import authApi from "../../../apis/auth";
import Spinner from "../../../components/Spinner";

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

export default function SupporterRegisterForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [isLoading, setIsLoading] = useState(false);

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
      onClose();
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

      <form onSubmit={handleSubmit} className="w-full px-12">
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

          <div className="col-span-2 py-6">
            <Button moveDown={inputError?.password} color="orange" width={"full"}>
              SIGN UP
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
