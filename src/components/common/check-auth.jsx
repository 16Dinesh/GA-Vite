import { Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { ReceiptIndianRupee } from "lucide-react";

export default function CheckAuth({
  isAuthenticated,
  user,
  isLoading,
  children,
}) {
  const location = useLocation();

  console.log(location.pathname)


  console.log(user);
  const isUser = user?.role;
  console.log(isUser);

 

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
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  const isAdminPage = location.pathname.includes("admin");
  const isServicePage = location.pathname.includes("service");

  if (!isAuthenticated && !isLoginOrRegister) {
    return <Navigate to="/auth/login" />;
  }

  // if (isAuthenticated && isUser === "user" && isAdminPage) {
  //   console.log("Redirecting to unauthorized page");
  //   return <Navigate to="/unauth-page" />;
  // }


  // if (isAuthenticated && isLoginOrRegister) {
  //   if (isUser === "admin") {
  //     return <Navigate to="/admin/dashboard" />;
  //   } else {
  //     return <Navigate to="/services" />;
  //   }
  // }

  if(isAuthenticated && isLoginOrRegister) {
    if(isUser === "admin") {
      return <Navigate to="/admin/dashboard"/>
    }
  }

  // if(isAuthenticated && isLoginOrRegister) {
  //   if(isUser === "user") {
  //     return <Navigate to="/services" />;
  //   }
  // }

  if(isAuthenticated && isUser === "user" && isAdminPage) {
    return <Navigate to="/Unauthorized-page"/>
  }

  //working
  if (isAuthenticated && isUser === "admin" && isServicePage) {
    console.log("Redirecting admin to dashboard from service page");
    return <Navigate to="/admin/dashboard" />;
  }

  console.log("isAuthenticated:", isAuthenticated);
  console.log("isUser:", isUser);
  console.log("isAdminPage:", isAdminPage);
  console.log("isServicePage:", isServicePage);
  return <>{children}</>;
}
