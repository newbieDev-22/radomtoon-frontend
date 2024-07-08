import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useStore } from "../store/useStore";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import validateLogin from "../validators/validate-login";
import { motion } from "framer-motion";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

const popupForm = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", duration: 0.6, ease: "easeOut" },
};

export default function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const login = useStore((state) => state.login);
  const navigate = useNavigate();

  const handleChangInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        setInputError((prev) => ({ ...prev, ...error }));
      } else {
        setInputError((prev) => ({ ...prev, ...initialInputError }));
        const res = await login(input);
        if (res === true) {
          navigate("/");
          toast.success("Login successfully");
        } else {
          toast.error(res);
        }
      }
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "Invalid email or password"
            : "Internet Server Error";
        return toast.error(message);
      }
    }
  };

  return (
    <>
      <div className="relative min-w-screen min-h-screen flex items-center justify-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1492539161849-b2b18e79c85f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <motion.div
          {...popupForm}
          className="relative bg-slate-100 bg-opacity-80 backdrop-blur-md rounded-lg p-6 md:p-10 max-w-md w-full mx-4"
        >
          <h1 className="text-3xl font-bold text-center mb-4">LOG IN</h1>
          <form onSubmit={handleSubmitForm} className="space-y-6">
            <div>
              <Input
                name="email"
                placeholder="Email"
                onChange={handleChangInput}
                value={input.email}
                error={inputError.email}
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangInput}
                value={input.password}
                error={inputError.password}
              />
            </div>
            <Button width={"full"}>LOGIN</Button>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
              <button
                className="font-bold hover:text-creator-saturate transition duration-300"
                onClick={() => navigate("/creator-register")}
              >
                Become a Creator
              </button>
              <div className="hidden md:block">|</div>
              <hr className="border-1 border-black w-[70%] md:hidden" />
              <button
                className="font-bold hover:text-yellow-500 transition duration-300"
                onClick={() => navigate("/supporter-register")}
              >
                Join as a Supporter
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
