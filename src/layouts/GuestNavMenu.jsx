import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { getResponsiveValue } from "../utils/responsive";

export default function GuestNavMenu({ inHomePage }) {
  const navigate = useNavigate();
  const buttonWidthBreakpoints = {
    default : 40,
    sm : 20,
    md : 40
  }

  const buttonWidth = () => getResponsiveValue(buttonWidthBreakpoints)
  console.log(buttonWidth)

  return (
    <div className="grid grid-cols-2">
      <Button
        onClick={() => navigate("/creator-register")}
        bg="supporter-normal"
        width={buttonWidth}
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
