import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const loginData = { emailOrPhone: "", password: "" };

export default function LoginPage() {
  const [input, setInput] = useState(loginData);

  const handleChangInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] h-[400px] flex shadow-lg rounded-lg">
        <div className="relative w-[50%] h-full flex items-center">
          <img
            className="absolute object-cover w-full h-full"
            src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/05/27/208313.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] h-full  px-20 py-10 rounded-lg">
          <h1 className="text-3xl font-bold text-center">LOGIN</h1>

          <form onSubmit={handleSubmitForm} action="">
            <div className="flex flex-col justify-center mt-8">
              <Input
                name="emailOrPhone"
                placeholder="Email or phone number"
                onChange={handleChangInput}
                value={input.emailOrPhone}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangInput}
                value={input.password}
              />
              <Button color="orange">LOGIN</Button>
            </div>
            <hr className="mt-10 border-black border-1" />
            <div className="flex justify-center mt-8 gap-6">
              <h6 role="button" className="text-[12px] font-semibold">
                Create Creator Account
              </h6>
              <h6 role="button" className="text-[12px] font-semibold">
                Create Supporter Account
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
