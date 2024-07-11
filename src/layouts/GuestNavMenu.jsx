import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function GuestNavMenu({ inHomePage }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2">
      <Button
        onClick={() => navigate("/creator-register")}
        bg="supporter-normal"
        width="40"
        height="14"
      >
        Start a Project
      </Button>
      <button
        onClick={() => navigate("/login")}
        className={`hover:text-creator-saturate transition duration-300  ${
          inHomePage ? "text-white" : "text-black"
        }`}
      >
        Log In
      </button>
    </div>
  );
}
