import { useState } from "react";
import Input from "../components/Input";
import validateRegister from "../validators/validate-register";
import Button from "../components/Button";

const CreatorRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const ErrorCreatorRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export default function CreatorRegisterForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [creatorData, setCreatorData] = useState(CreatorRegisterData);
  const [errorCreatorData, setErrorCreatorData] = useState(ErrorCreatorRegisterData);

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
    setCreatorData({ ...creatorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(creatorData);
      console.log(errorCreatorData);
      if (error) {
        return setErrorCreatorData(error);
      }
      setErrorCreatorData("");
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
    <form onSubmit={handleSubmit} action="">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="First name"
            value={creatorData.firstName}
            name="firstName"
            onChange={handleChangeInput}
            error={errorCreatorData.firstName}
          />
          <Input
            type="text"
            placeholder="Last name"
            value={creatorData.lastName}
            name="lastName"
            onChange={handleChangeInput}
            error={errorCreatorData.lastName}
          />
        </div>

        <Input
          type="text"
          placeholder="Email"
          value={creatorData.email}
          name="email"
          onChange={handleChangeInput}
          error={errorCreatorData.email}
        />
        <Input
          type="text"
          placeholder="Phone number"
          value={creatorData.phoneNumber}
          name="phoneNumber"
          onChange={handleChangeInput}
          error={errorCreatorData.phoneNumber}
        />

        <div className="flex gap-4">
          <Input
            type="password"
            placeholder="Password"
            value={creatorData.password}
            name="password"
            onChange={handleChangeInput}
            error={errorCreatorData.password}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={creatorData.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            error={errorCreatorData.confirmPassword}
          />
        </div>
        {selectedImage ? (
          <h1 className=" block border-[1.5px] border-green-500 rounded-lg p-8 text-center text-green-500">
            Picture upload successful
          </h1>
        ) : (
          <label htmlFor="file-upload" className="cursor-pointer text-center">
            <span
              className={`block border-[1.5px] border-gray rounded-lg p-8 ${
                errorCreatorData?.password ? "mt-11" : null
              }`}
            >
              + Add your identity card with you image
            </span>

            <input
              hidden="invisible"
              type="file"
              id="file-upload"
              name="file-upload"
              onChange={handleImageChange}
            />
          </label>
        )}
        <Button width={"full"}>Request Approve</Button>
      </div>
    </form>
  );
}
