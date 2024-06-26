import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function GuestNavMenu({ inLanding }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2">
      <Button
        onClick={() => "Creator Register Modal"}
        bg="creator-normal"
        width="40"
        height="14"
      >
        Start a Project
      </Button>
      <button
        onClick={() => navigate("/login")}
        className={`hover:text-creator-saturate transition duration-300  ${
          inLanding ? "text-white" : "text-black"
        }`}
      >
        Log In
      </button>
    </div>
  );
}
