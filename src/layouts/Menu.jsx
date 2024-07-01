import { useLocation } from "react-router-dom";
import GuestNavMenu from "./GuestNavMenu";
import UserNavMenu from "./UserNavMenu";
import { USER_ROLE } from "../constants";

export default function Menu() {
  const currentUser = USER_ROLE.GUEST;
  const location = useLocation();
  const inLanding = location.pathname == "/landing";

  return (
    <div>
      {currentUser === USER_ROLE.GUEST ? (
        <GuestNavMenu inLanding={inLanding} />
      ) : (
        <UserNavMenu inLanding={inLanding} currentUser={currentUser} />
      )}
    </div>
  );
}
