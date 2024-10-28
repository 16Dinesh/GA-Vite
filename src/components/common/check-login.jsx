import { Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CheckLogin({ isVerified, role, isLoading, children }) {
  const location = useLocation();
  //   console.log(location.pathname)

  //   console.log(user);
  //   const isUser = user?.role;
  //   console.log(isUser);

  if (isLoading) {
    return (
      <div className="Nav-loader">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const isLoginOrRegister =
    location.pathname.includes("/user") ||
    location.pathname.includes("/register");
  const isLoginPage = location.pathname.includes("login");
  const isServicePage = location.pathname.includes("service");

  if (!isVerified && !isLoginOrRegister) {
    return <Navigate to="/login/user" />;
  }

  if (isVerified && isLoginOrRegister) {
    if (role === "user") {
      return <Navigate to="/services" />;
    }
  }

//   if(isVerified && isLoginOrRegister && role === 'user') 



  //   console.log("isAuthenticated:", isAuthenticated);
  //   console.log("isUser:", isUser);
  //   console.log("isAdminPage:", isAdminPage);
  //   console.log("isServicePage:", isServicePage);
  return <>{children}</>;
}
