import { Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

 

  // Show a loading indicator while the authentication state is being determined
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

  // If not authenticated, redirect to login unless already on login/register page
  if (!isAuthenticated && !isLoginOrRegister) {
    return <Navigate to="/auth/login" />;
  }

  if (isAuthenticated && isLoginOrRegister) {
    // Redirect to admin dashboard if the user is an admin
    if (isUser === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      // Redirect to services if not an admin
      return <Navigate to="/services" />;
    }
  }

  // If authenticated, not an admin, and on an admin page, redirect to unauthorized page
  if (isAuthenticated && isUser === "user" && isAdminPage) {
    console.log("Redirecting to unauthorized page");
    return <Navigate to="/unauth-page" />;
  }

  // If authenticated, is an admin, and on a service page, redirect to admin dashboard
  if (isAuthenticated && isUser === "admin" && isServicePage) {
    console.log("Redirecting admin to dashboard from service page");
    return <Navigate to="/admin/dashboard" />;
  }

  console.log("isAuthenticated:", isAuthenticated);
  console.log("isUser:", isUser);
  console.log("isAdminPage:", isAdminPage);
  console.log("isServicePage:", isServicePage);
  // If none of the above conditions match, render the children components
  return <>{children}</>;
}
