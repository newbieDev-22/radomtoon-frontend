import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
import Dropdown from "../components/Dropdown";
import { PROVINCE_MAP } from "../constants";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import authApi from "../apis/auth";

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
  const navigate = useNavigate()

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
      const error = validateRegister(input);
      if (error) {
        setInputError((prev) => ({ ...prev, ...error }));
      } else {
        setInputError((prev) => ({ ...prev, ...initialInputError }));

        await authApi.supporterRegister(input);
        toast.success("Registered successfully, please log in to continue", {
          position: "bottom-right",
          autoClose: 2000,
        });
        onClose();
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.data.field === "email") {
          setInputError((prev) => ({
            ...prev,
            email: "Email is already in use",
          }));
        }
        if (err.response.data.field === "phone") {
          setInputError((prev) => ({
            ...prev,
            phone: "Phone number is already in use",
          }));
        }
      }
    }
  };

  return (
    <>
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

        <div className="col-span-2 flex justify-center py-6">
          <Button moveDown={inputError?.password} color="orange">
            SIGN UP
          </Button>
        </div>
      </div>
    </form>
          </div>
        </div>
      </div>
    </>
  );
}
