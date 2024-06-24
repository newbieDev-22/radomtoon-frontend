import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import LoginImage from "../features/authentication/components/LoginImage";

const loginData = { emailOrPhone: "", password: "" };

export default function LoginPage() {
  const [input, setInput] = useState(loginData);

  const handleChangInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="min-w-screen min-h-screen">
      <div className="grid grid-cols-2 shadow-lg rounded-lg">
        <div className="h-full w-full">
          <LoginImage />
        </div>
        <div className="px-48 rounded-lg bg-green-300 flex w-full h-full flex-col justify-center g">
          <h1 className="text-3xl font-bold text-center">SIGN IN</h1>

          <form onSubmit={handleSubmitForm} action="">
            <div className="">
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
                <Button width={"full"}>LOGIN</Button>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
