import { NavLink } from "react-router-dom";

export default function UserLoginHeader() {
  return (
    <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Green Assist
        </NavLink>
        <div >
        <NavLink to="/login/user" className="btn nav-btn mx-2">
          Login/SignUp
        </NavLink>
        </div>
      </div>
    </nav>
  );
}
