import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { USER_ROLE } from "../constants";
import { useStore } from "../store/useStore";
import { toast } from "react-toastify";
import { getResponsiveValue } from "../utils/responsive";

export default function UserNavMenu({ inHomePage, currentUser }) {
  const user = useStore((state) => state.authUser.user);
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout);
  const buttonWidth = () => getResponsiveValue({
    default : 40,
    sm : 20,
    lg : 40
  })

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logout successfully");
  };

  return (
    <div className="grid grid-cols-2">
      {currentUser === USER_ROLE.SUPPORTER && (
        <Button
          onClick={() => navigate("/supporter-histories")}
          bg="supporter-normal"
          width='40'
          height="14"
        >
          Histories
        </Button>
      )}
      {currentUser === USER_ROLE.CREATOR && (
        <Button
          onClick={() => navigate(`/creator-panel/${user.id}`)}
          bg="supporter-normal"
          width={buttonWidth}
          height="14"
        >
          Creator Panel
        </Button>
      )}
      {currentUser === USER_ROLE.ADMIN && (
        <Button
          onClick={() => navigate("/admin-panel")}
          bg="supporter-normal"
          width={buttonWidth}
          height="14"
        >
          Admin Panel
        </Button>
      )}
      <button
        className={`${inHomePage ? "text-white" : "text-black"}`}
        onClick={handleLogout}
      >
        LOG OUT
      </button>
    </div>
  );
}
