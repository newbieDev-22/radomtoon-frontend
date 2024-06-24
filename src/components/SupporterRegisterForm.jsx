import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";
import validateRegister from "../validators/validate-rigister";

const SupporterRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const ErrorSupporterRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export default function SupporterRegisterForm() {
  const [supporterData, setSupporterData] = useState(SupporterRegisterData);
  const [errorSupporterData, setErrorSupporterData] = useState(
    ErrorSupporterRegisterData
  );

  const handleChangeInput = (e) => {
    setSupporterData({ ...supporterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(supporterData);
      console.log(errorSupporterData);
      if (error) {
        return setErrorSupporterData(error);
      }
      setErrorSupporterData(errorSupporterData);
      // setErrorCreatorData({ ...creatorData });
      // await authApi.register(creatorData);
      // alert(`Register successfully, please log in to continue`);
    } catch (error) {
      console.log(error);
      // if (error instanceof AxiosError) {
      //   if (error.response.data.field === "emailOrMobile")
      //     setinputError((prev) => ({
      //       ...prev,
      //       emailOrMobile: "email or mobile already in use",
      //     }));
      // }
    }
  };

  return (
    <div className="flex justify-center">
      <Modal title="SUPPORTER REGISTER">
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="First name"
                value={supporterData.firstName}
                name="firstName"
                onChange={handleChangeInput}
                error={errorSupporterData.firstName}
              />
              <Input
                type="text"
                placeholder="Last name"
                value={supporterData.lastName}
                name="lastName"
                onChange={handleChangeInput}
                error={errorSupporterData.lastName}
              />
            </div>

            <Input
              type="text"
              placeholder="Email"
              value={supporterData.email}
              name="email"
              onChange={handleChangeInput}
              error={errorSupporterData.email}
            />
            <Input
              type="text"
              placeholder="Phone number"
              value={supporterData.phoneNumber}
              name="phoneNumber"
              onChange={handleChangeInput}
              error={errorSupporterData.phoneNumber}
            />

            <div className="flex gap-4">
              <Input
                type="password"
                placeholder="Password"
                value={supporterData.password}
                name="password"
                onChange={handleChangeInput}
                error={errorSupporterData.password}
              />
              <Input
                type="password"
                placeholder="Confirm password"
                value={supporterData.confirmPassword}
                name="confirmPassword"
                onChange={handleChangeInput}
                error={errorSupporterData.confirmPassword}
              />
            </div>
            <Button
              moveDown={errorSupporterData?.password && "mt-6"}
              color="orange"
            >
              Register
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
