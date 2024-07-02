import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import LoginImage from "../features/authentication/components/LoginImage";
import SupporterRegisterForm from "../features/authentication/components/SupporterRegisterForm";
import { useStore } from "../store/useStore";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import validateLogin from "../validators/validate-login";
import Spinner from "../components/Spinner";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const [loading, setLoading] = useState(false);
  const login = useStore((state) => state.login);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
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
        setLoading(true);

        const response = await login(input);
        if (response === true) {
          toast.success("Login successfully");
          navigate("/");
        } else {
          toast.error(response);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner transparent />}
      <div className="min-w-screen min-h-screen">
        <div className="grid grid-cols-2 shadow-lg rounded-lg">
          <div className="h-screen w-full">
            <LoginImage />
          </div>
          <div className="px-20 bg-slate-100 flex w-full h-full flex-col justify-center">
            <h1 className="text-3xl font-bold text-center">SIGN IN</h1>

            <form onSubmit={handleSubmitForm}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-center gap-2">
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
                  <div className="py-2">
                    <Button width={"full"}>LOGIN</Button>
                  </div>
                </div>
              </div>
            </form>

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
                onClick={() => setOpenRegisterModal(true)}
              >
                Join as a Supporter
              </button>
            </div>
          </div>
        </div>
      </div>
      {openRegisterModal && (
        <Modal
          onClose={() => setOpenRegisterModal(false)}
          title="Supporter Registration"
          width={60}
          open={true}
        >
          <SupporterRegisterForm onClose={() => setOpenRegisterModal(false)} />
        </Modal>
      )}
    </>
  );
}
