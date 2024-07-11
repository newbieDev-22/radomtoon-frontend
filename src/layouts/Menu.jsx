import { useLocation } from "react-router-dom";
import GuestNavMenu from "./GuestNavMenu";
import UserNavMenu from "./UserNavMenu";
import { USER_ROLE } from "../constants";
import { useStore } from "../store/useStore";

export default function Menu() {
  const role = useStore((state) => state.authUser.role);
  const location = useLocation();
  const inLanding = ["/landing", "/search"].some(path => location.pathname.includes(path));

  return (
    <div>
      {role === USER_ROLE.GUEST ? (
        <GuestNavMenu inLanding={inLanding} />
      ) : (
        <UserNavMenu inLanding={inLanding} currentUser={role} />
      )}
    </div>
  );
}
