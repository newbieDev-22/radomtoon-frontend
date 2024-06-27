import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import validateRegister from "../validators/validate-register";
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
};

export default function CreatorRegister() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [creatorData, setCreatorData] = useState(CreatorRegisterData);
  const [errorCreatorData, setErrorCreatorData] = useState(
    ErrorCreatorRegisterData
  );
  const [openPolicyModal, setOpenPolicyModal] = useState(false);
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
    setCreatorData({ ...creatorData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsPolicyChecked(e.target.checked);
    if (e.target.checked) {
      setCheckboxError("");
    }
  };

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!isPolicyChecked) {
        setCheckboxError("You must agree to the policy to continue.");
        return;
      }
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
    <>
      <div className="min-w-screen min-h-screen">
        <div className="grid grid-cols-2 shadow-lg rounded-lg">
          <div className="px-20 bg-cyan-100 flex w-full h-full flex-col justify-center">
            <h1 className="text-5xl mb-2 font-semibold text-radomtoon-dark">
              Turn your imagination into reality.
            </h1>
            <h2 className="text-base mb-8 text-gray-600">
              A hub for early adopters and visionaries to explore cutting-edge
              technology ahead of the curve.
            </h2>
            <form onSubmit={handleSubmit} action="">
              <div className="flex flex-col ">
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
                />

                {selectedImage ? (
                  <h1 className=" block mb-10 border-[1.5px] border-green-500 rounded-lg p-8 text-center text-green-500 bg-white">
                    Picture upload successful
                  </h1>
                ) : (
                  <div>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-center"
                    >
                      <span
                        className={`block mb-10 border-[1.5px] border-gray rounded-lg p-8 bg-gray-200 hover:bg-gray-100 transition duration-300 ${
                          errorCreatorData?.password && "mt-1"
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
                  </div>
                )}

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

                <Button
                  width={"full"}
                  height="14"
                  bg="creator-saturate"
                  color="white"
                >
                  Request Approve
                </Button>
              </div>
            </form>
          </div>
          <div className="relative h-screen w-full group">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-700 ease-in-out delay-300">
              <button
                onClick={() => navigate("/login")}
                className="text-white font-bold text-3xl opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out delay-500"
              >
                Go to login
              </button>
            </div>
          </div>
        </div>
      </div>

      {openPolicyModal && (
        <Modal onClose={() => setOpenPolicyModal(false)} title="Policy">
          <ol>
            <li>
              <p className="font-bold text-lg">1. ขั้นตอนการสมัคร</p>
              <p className="font-semibold">การสร้างบัญชี:</p>
              <p>
                ผู้สมัครต้องสร้างบัญชีผู้ใช้งานบนแพลตฟอร์มโดยใช้ข้อมูลที่ถูกต้องและเป็นปัจจุบัน
                ยืนยันตัวตนผ่านอีเมลหรือเบอร์โทรศัพท์
              </p>
              <p className="font-semibold">การยืนยันตัวตน:</p>
              <p>
                ผู้สมัครต้องส่งสำเนาบัตรประชาชนหรือหนังสือเดินทางเพื่อยืนยันตัวตน
                อาจมีการตรวจสอบเพิ่มเติม เช่น
                การส่งเอกสารรับรองที่อยู่หรือเอกสารรับรองการทำงาน
              </p>
              <p className="font-semibold">การส่งรายละเอียดโครงการ:</p>
              <p>
                ผู้สมัครต้องกรอกรายละเอียดโครงการ เช่น ชื่อโครงการ วัตถุประสงค์
                เป้าหมายทางการเงิน และระยะเวลาในการระดมทุน แนบแผนการดำเนินงาน
                งบประมาณ และตารางเวลาการทำงาน
                แนบวีดีโอหรือสื่อที่เกี่ยวข้องเพื่ออธิบายโครงการเพิ่มเติม
              </p>
            </li>
            <br />
            <li>
              <p className="font-bold text-lg">2. ข้อกำหนดและเงื่อนไข</p>
              <p className="font-semibold">ข้อกำหนดเกี่ยวกับโครงการ:</p>
              <p>
                โครงการต้องไม่ขัดต่อกฎหมายและศีลธรรม
                โครงการต้องมีความโปร่งใสในการใช้เงินและมีเป้าหมายที่ชัดเจน
                ห้ามนำเงินที่ระดมทุนได้ไปใช้ในทางที่ผิดหรือไม่เกี่ยวข้องกับโครงการ
              </p>
              <p className="font-semibold">ความโปร่งใส:</p>
              <p>
                ผู้สมัครต้องอัพเดตสถานะของโครงการอย่างสม่ำเสมอและแจ้งผู้สนับสนุนหากมีการเปลี่ยนแปลงใด
                ๆ ในโครงการ รายงานการใช้เงินระดมทุนต้องมีความชัดเจนและโปร่งใส
              </p>
              <p className="font-semibold">การคืนเงิน:</p>
              <p>
                หากโครงการไม่สามารถดำเนินการได้ตามแผน
                ผู้สมัครต้องมีนโยบายในการคืนเงินให้กับผู้สนับสนุนตามสัดส่วนที่เหมาะสม
              </p>
            </li>
            <br />
            <li>
              <p className="font-bold text-lg">
                3. การบริหารจัดการเงินที่ระดมทุนได้
              </p>
              <p className="font-semibold">บัญชีแยกต่างหาก:</p>
              <p>
                ผู้สมัครต้องมีบัญชีธนาคารแยกต่างหากสำหรับเงินที่ระดมทุนได้
                เพื่อแยกจากเงินส่วนตัว
              </p>
              <p className="font-semibold">การใช้เงินตามแผน:</p>
              <p>
                ผู้สมัครต้องใช้เงินตามแผนการที่ได้ยื่นเสนอไว้เท่านั้น
                หากมีความจำเป็นต้องเปลี่ยนแปลงการใช้เงิน
                ผู้สมัครต้องแจ้งและได้รับความเห็นชอบจากผู้สนับสนุน
              </p>
              <p className="font-semibold">การตรวจสอบบัญชี:</p>
              <p>
                แพลตฟอร์มอาจขอให้ผู้สมัครส่งรายงานการใช้เงินเป็นระยะ
                หรือขอทำการตรวจสอบบัญชีเพื่อความโปร่งใส
              </p>
            </li>
            <br />
            <li>
              <p className="font-bold text-lg">4. สิทธิและหน้าที่ของผู้สมัคร</p>
              <p className="font-semibold">สิทธิของผู้สมัคร:</p>
              <p>
                สิทธิในการระดมทุนตามเงื่อนไขที่กำหนด
                สิทธิในการรับการสนับสนุนและคำแนะนำจากแพลตฟอร์ม
              </p>
              <p className="font-semibold">หน้าที่ของผู้สมัคร:</p>
              <p>
                หน้าที่ในการปฏิบัติตามเงื่อนไขและข้อกำหนดที่กำหนดไว้
                หน้าที่ในการแจ้งข้อมูลที่เป็นความจริงและถูกต้อง
              </p>
            </li>
          </ol>
        </Modal>
      )}
    </>
  );
}
