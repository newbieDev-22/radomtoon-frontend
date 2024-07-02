import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useStore } from "../store/useStore";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import validateLogin from "../validators/validate-login";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
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
        login(input);
        navigate("/");
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
      <div className="min-w-screen min-h-screen">
        <div className="flex shadow-lg rounded-lg">
          <div className="relative h-screen w-full">
            <img
              src="https://images.unsplash.com/photo-1492539161849-b2b18e79c85f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute rounded-xl inset-0 m-auto px-20 w-1/3 bg-slate-100 bg-opacity-90 flex h-1/2 flex-col justify-center">
            <h1 className="text-3xl font-bold text-center">
              Excited to Dive into the Campaign? Log in Here
            </h1>

            <form onSubmit={handleSubmitForm}>
              <div className="flex flex-col justify-center gap-4 pt-8">
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
              </div>
              <div className="py-4">
                <Button width={"full"}>LOGIN</Button>
              </div>

              <div className="flex justify-center">
                <button
                  className="rounded-box grid place-items-center font-bold hover:text-creator-saturate transition duration-300"
                  onClick={() => navigate("/creator-register")}
                >
                  Become a Creator
                </button>
                <div className="divider lg:divider-horizontal">|</div>
                <button
                  className="rounded-box grid place-items-center font-bold hover:text-yellow-500 transition duration-300"
                  onClick={() => navigate("/supporter-register")}
                >
                  Join as a Supporter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
