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
        <div className="h-screen w-full">
          <LoginImage />
        </div>
        <div className="px-20 bg-creator-normal flex w-full h-full flex-col justify-center">
          <h1 className="text-3xl font-bold text-center">SIGN IN</h1>

          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col ">
              <div className="flex flex-col justify-center pt-8">
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

              <div className="flex justify-center">
                <div className="rounded-box grid place-items-center font-bold">
                  Create Creator Account
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="rounded-box grid place-items-center font-bold">
                  Create Supporter Account
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
