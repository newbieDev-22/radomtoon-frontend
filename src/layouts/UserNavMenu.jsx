import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { USER_ROLE } from "../constants";
import ProfileImage from "../components/EditorComponent/ProfileImage";
import MyProfile from "../features/profile/MyProfile";
import DropdownProfile from "../features/profile/DropdownProfile";

export default function UserNavMenu({ inLanding, currentUser }) {
  const navigate = useNavigate();
  return (
    //grid grid-cols-2
    <div className="flex items-center justify-center gap-5">
      <div>
        {currentUser === USER_ROLE.SUPPORTER && (
          <Button
            onClick={() => navigate("/supporter-histories")}
            bg="creator-normal"
            width="40"
            height="14"
          >
            Histories
          </Button>
        )}
        {currentUser === USER_ROLE.CREATOR && (
          <Button
            onClick={() => navigate("/creator-panel")}
            bg="creator-normal"
            width="40"
            height="14"
          >
            Creator Panel
          </Button>
        )}
        {currentUser === USER_ROLE.ADMIN && (
          <Button
            onClick={() => navigate("/admin-panel")}
            bg="creator-normal"
            width="40"
            height="14"
          >
            Admin Panel
          </Button>
        )}
      </div>

      <DropdownProfile />


    </div>
  );
}
