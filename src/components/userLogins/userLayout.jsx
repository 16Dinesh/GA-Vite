import { Link, Outlet, useLocation } from "react-router-dom";
import UserLoginHeader from "./header";
import "./userLayout.css";
import UserLoginParticles from "./Particles";

export default function UserLoginLayout() {
  const location = useLocation();
  const isUserPage = location.pathname.includes("user");
  const isRegisterPage = location.pathname.includes("register");

  // console.log(location.pathname);

  return (
    <>
      <UserLoginHeader />
      <UserLoginParticles/>
      <div className="user-login-Layout">
        <div className="user-login-inside-Layout">
          <Outlet />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop:"1rem", paddingBottom:"2rem", position:"relative" , zIndex:"1"}}>
        {isUserPage ? (
          <>
            Don't have an account? <Link to='/login/register' style={{color:"white", textDecoration:"none"}}>Register Now</Link>
          </>
        ) : isRegisterPage ? (
          <>
            Have an account? <Link to='/login/user' style={{color:"white", textDecoration:"none"}}>Login now</Link>
          </>
        ) : null}
      </div>
    </>
  );
}
