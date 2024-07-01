import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
import Dropdown from "../components/Dropdown";
import { toast } from "react-toastify";

const provinces = [
  "Amnat Charoen",
  "Ang Thong",
  "Bangkok",
  "Bueng Kan",
  "Buri Ram",
  "Chachoengsao",
  "Chai Nat",
  "Chaiyaphum",
  "Chanthaburi",
  "Chiang Mai",
  "Chiang Rai",
  "Chonburi",
  "Chumphon",
  "Kalasin",
  "Kamphaeng Phet",
  "Kanchanaburi",
  "Khon Kaen",
  "Krabi",
  "Lampang",
  "Lamphun",
  "Loei",
  "Lopburi",
  "Mae Hong Son",
  "Maha Sarakham",
  "Mukdahan",
  "Nakhon Nayok",
  "Nakhon Pathom",
  "Nakhon Phanom",
  "Nakhon Ratchasima",
  "Nakhon Sawan",
  "Nakhon Si Thammarat",
  "Nan",
  "Narathiwat",
  "Nong Bua Lam Phu",
  "Nong Khai",
  "Nonthaburi",
  "Pathum Thani",
  "Pattani",
  "Phangnga",
  "Phatthalung",
  "Phayao",
  "Phetchabun",
  "Phetchaburi",
  "Phichit",
  "Phitsanulok",
  "Phra Nakhon Si Ayutthaya",
  "Phrae",
  "Phuket",
  "Prachin Buri",
  "Prachuap Khiri Khan",
  "Ranong",
  "Ratchaburi",
  "Rayong",
  "Roi Et",
  "Sa Kaeo",
  "Sakon Nakhon",
  "Samut Prakan",
  "Samut Sakhon",
  "Samut Songkhram",
  "Saraburi",
  "Satun",
  "Si Sa Ket",
  "Sing Buri",
  "Songkhla",
  "Sukhothai",
  "Suphan Buri",
  "Surat Thani",
  "Surin",
  "Tak",
  "Trang",
  "Trat",
  "Ubon Ratchathani",
  "Udon Thani",
  "Uthai Thani",
  "Uttaradit",
  "Yala",
  "Yasothon",
];

const SupporterRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  address: "",
  province: "",
};

const ErrorSupporterRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  policy: "",
  address: "",
  province: "",
};

export default function SupporterRegister() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [SupporterData, setSupporterData] = useState(SupporterRegisterData);
  const [errorSupporterData, setErrorSupporterData] = useState(
    ErrorSupporterRegisterData
  );
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

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
    setSupporterData({ ...SupporterData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsPolicyChecked(e.target.checked);
    if (e.target.checked) {
      setCheckboxError("");
    }
  };

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
    setSupporterData((prevData) => ({ ...prevData, province: value }));
    setErrorSupporterData((prevErrors) => ({ ...prevErrors, province: "" }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!isPolicyChecked) {
        setCheckboxError("You must agree to the policy to continue.");
        return;
      }
      const error = validateRegister(SupporterData);
      console.log(errorSupporterData);
      if (error) {
        return setErrorSupporterData(error);
      }
      setErrorSupporterData("");
      toast.success("Register successful");
      // setErrorSupporterData({ ...SupporterData });
      // await authApi.register(SupporterData);
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
            <form onSubmit={handleSubmit} action="">
              <div className="flex flex-col ">
                <div className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="First name"
                    value={SupporterData.firstName}
                    name="firstName"
                    onChange={handleChangeInput}
                    error={errorSupporterData.firstName}
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={SupporterData.lastName}
                    name="lastName"
                    onChange={handleChangeInput}
                    error={errorSupporterData.lastName}
                  />
                </div>

                <Input
                  type="text"
                  placeholder="Email"
                  value={SupporterData.email}
                  name="email"
                  onChange={handleChangeInput}
                  error={errorSupporterData.email}
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={SupporterData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChangeInput}
                  error={errorSupporterData.phoneNumber}
                />

                <div className="flex gap-4">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={SupporterData.password}
                    name="password"
                    onChange={handleChangeInput}
                    error={errorSupporterData.password}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    value={SupporterData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChangeInput}
                    error={errorSupporterData.confirmPassword}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Address"
                  value={SupporterData.address}
                  name="address"
                  onChange={handleChangeInput}
                  error={errorSupporterData.address}
                />

                <Dropdown
                  data={provinces}
                  onChange={handleProvinceChange}
                  title="Choose your province..."
                  error={errorSupporterData.province}
                />
                <div className="flex items-center mb-4">
                  <input
                    id="policy-checkbox"
                    type="checkbox"
                    className="mr-2"
                    name="policy"
                    checked={isPolicyChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="policy-checkbox"
                    className="text-gray-600 cursor-pointer text-sm"
                  >
                    I have read understand and accept the{" "}
                    <a
                      onClick={() => setOpenPolicyModal(true)}
                      className="text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                {checkboxError && (
                  <p className="text-red-500 text-sm mb-4">{checkboxError}</p>
                )}

                <Button width={"full"} height="14">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}