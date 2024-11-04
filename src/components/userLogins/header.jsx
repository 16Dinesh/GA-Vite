import { Link, NavLink, useLocation } from "react-router-dom";

export default function UserLoginHeader() {
  const location = useLocation();
  const isUserPage = location.pathname.includes("user");
  const isRegisterPage = location.pathname.includes("register");

  // console.log(location.pathname);

  return (
    <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Green Assist
        </NavLink>
        <div>
          <div>
            {isUserPage ? (
              <NavLink to="/login/register"  className="btn nav-btn mx-2"style={{ textDecoration: "none", color: "white" }}>
                Sign Up
              </NavLink>
            ) : isRegisterPage ? (
              <NavLink to="/login/user" className="btn nav-btn mx-2" style={{ textDecoration: "none", color: "white" }}>
                Login
              </NavLink>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
