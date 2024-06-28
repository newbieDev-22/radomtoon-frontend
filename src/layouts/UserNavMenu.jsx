import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { USER_ROLE } from "../constants";

export default function UserNavMenu({ inLanding, currentUser }) {
  const navigate = useNavigate();
  currentUser = USER_ROLE.ADMIN
  return (
    <div className="grid grid-cols-2">
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
      <button className={`${inLanding ? "text-white" : "text-black"}`}>LOG OUT</button>
    </div>
  );
}
