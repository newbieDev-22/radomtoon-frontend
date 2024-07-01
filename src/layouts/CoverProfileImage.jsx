import ProfileImage from "../components/EditorComponent/ProfileImage";

export default function CoverProfileImage() {
  const firstName = "Bbbbb";
  const lastName ="Omg"
  return (
    <div className="flex justify-end flex-col items-center gap-5 h-[300px] bg-gray-50 shadow-sm relative">
      <ProfileImage firstName={firstName} lastName={lastName}  />
      <div className="text-center">
        <p className="text-2xl mb-3 font-bold">{firstName} {lastName}</p>
      </div>
    </div>
  );
}
