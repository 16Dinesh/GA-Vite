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
  const isUser = user?.role;

  // Show loading spinner if the app is still loading authentication state
  if (isLoading) {
    return (
      <div className="Nav-loader">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const redirectPath = location.state?.from || "/services"

  const isAdminLoginOrRegister =
    location.pathname.includes("/admin/login") ||
    location.pathname.includes("/admin/register");
  const isAdminPage = location.pathname.includes("/admin");
  const isServicesPage = location.pathname.includes("/services");
  const isServicePage = location.pathname.includes("/service");

  const isUserLoginOrRegister =
    location.pathname.includes("/login/user") ||
    location.pathname.includes("/login/register");

  // Check specific paths and redirect accordingly
  if (location.pathname === "/login") {
    return <Navigate to="/login/user" />;
  }

  if (location.pathname === "/admin") {
    return <Navigate to="/admin/login" />;
  }

  if (location.pathname === "/service") {
    return <Navigate to="/services" />;
  }

  if (!isAuthenticated && isServicePage ) {
    return <Navigate to={"/login/user"} />;
  }


  if (isAuthenticated && isUser === "admin" && isAdminLoginOrRegister) {
    return <Navigate to="/admin/dashboard" />;
  }

  if(isAuthenticated && isUser === "user" && isUserLoginOrRegister) {
    return <Navigate to={redirectPath} />
  }
  
  // Prevent user access to admin pages if authenticated as "user"
  if (isAuthenticated && isUser === "user" && isAdminPage) {
    return <Navigate to="/unauthorized-page" />;
  }

  // Redirect admin from service page to dashboard
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
