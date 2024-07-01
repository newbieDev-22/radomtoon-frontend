import { useState } from "react";
import Input from "../components/Input";
import validateRegister from "../validators/validate-register";
import Button from "../components/Button";
import { toast } from "react-toastify";
import Dropdown from "../components/Dropdown";

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

const CreatorRegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  address: "",
  province: "",
};

const ErrorCreatorRegisterData = {
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

export default function CreatorRegisterForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [creatorData, setCreatorData] = useState(CreatorRegisterData);
  const [errorCreatorData, setErrorCreatorData] = useState(
    ErrorCreatorRegisterData
  );
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
    setCreatorData({ ...creatorData, [e.target.name]: e.target.value });
  };

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
    setCreatorData((prevData) => ({ ...prevData, province: value }));
    setErrorCreatorData((prevErrors) => ({ ...prevErrors, province: "" }));
  };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const error = validateRegister(creatorData);
  //     console.log(errorCreatorData);
  //     if (error) {
  //       return setErrorCreatorData(error);
  //     }
  //     setErrorCreatorData("");
  //     toast.success("Request has been accepted");
  //     // setErrorCreatorData({ ...creatorData });
  //     // await authApi.register(creatorData);
  //     // alert(`Register successfully, please log in to continue`);
  //   } catch (error) {
  //     console.log(error);
  //     // if (error instanceof AxiosError) {
  //     //   if (error.response.data.field === "emailOrMobile")
  //     //     setinputError((prev) => ({
  //     //       ...prev,
  //     //       emailOrMobile: "email or mobile already in use",
  //     //     }));
  //     // }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Request has been accepted");
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
        <Input
          type="text"
          placeholder="Address"
          value={creatorData.address}
          name="address"
          onChange={handleChangeInput}
          error={errorCreatorData.address}
        />
        <Dropdown
          data={provinces}
          onChange={handleProvinceChange}
          title="Choose your province..."
          error={errorCreatorData.province}
        />
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
        <Button type="submit" width={"full"}>
          Request Approve
        </Button>
      </div>
    </form>
  );
}
