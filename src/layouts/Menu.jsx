import { Link, useLocation } from "react-router-dom"
import Button from "../components/Button"

const user = false
// const user = {}
// user.creator = 1

export default function Menu() {
  const location = useLocation();
  const inLanding = location.pathname == '/landing'

  return (
    <>
      {!user ? (
        <>
          <Button onClick={() => "Creator Register Modal"} bg="creator-normal" width="40" height="14">Start a Project</Button>
          <Link to="/login" className={`hover:text-creator-saturate transition duration-300 ${inLanding ? 'text-white' : 'text-black'}`}>Log In</Link>
        </>
      )
      : (
        <>
          {user.supporter && <Button to="/support-history" bg="creator-normal" width="40" height="14">History</Button>}
          {user.creator && <Button to="/creator-profile" bg="creator-normal" width="40" height="14">Profile</Button>}
          {user.admin && <Button to="/admin-panel" bg="creator-normal" width="40" height="14">Admin Panel</Button>}
          <Link onClick={"handleLogout"} className={`${inLanding ? 'text-white' : 'text-black'}`}>Log Out</Link>
        </>
      )

      }
    </>
  )
}
