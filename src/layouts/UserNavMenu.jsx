import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { USER_ROLE } from "../constants";
import { useStore } from "../store/useStore";
import { toast } from "react-toastify";

export default function UserNavMenu({ inLanding, currentUser }) {
  const user = useStore((state) => state.authUser.user);
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout);

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
          width="40"
          height="14"
        >
          Histories
        </Button>
      )}
      {currentUser === USER_ROLE.CREATOR && (
        <Button
          onClick={() => navigate(`/creator-panel/${user.id}`)}
          bg="supporter-normal"
          width="40"
          height="14"
        >
          Creator Panel
        </Button>
      )}
      {currentUser === USER_ROLE.ADMIN && (
        <Button
          onClick={() => navigate("/admin-panel")}
          bg="supporter-normal"
          width="40"
          height="14"
        >
          Admin Panel
        </Button>
      )}
      <button
        className={`${inLanding ? "text-white" : "text-black"}`}
        onClick={handleLogout}
      >
        LOG OUT
      </button>
    </div>
  );
}
