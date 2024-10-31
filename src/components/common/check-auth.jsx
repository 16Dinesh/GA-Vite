import { Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CheckAuth({
  isAuthenticated,
  user,
  role,
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

  // Check specific paths and redirect accordingly
  if (location.pathname === "/login") {
    return <Navigate to="/login/user" />;
  }

  if (location.pathname === "/admin") {
    return <Navigate to="/admin/login" />;
  }

  const isAdminLoginOrRegister =
    location.pathname.includes("/admin/login") ||
    location.pathname.includes("/admin/register");
  const isAdminPage = location.pathname.includes("/admin");
  const isServicePage = location.pathname.includes("/services");

  const isUserLoginOrRegister =
    location.pathname.includes("/login/user") ||
    location.pathname.includes("/login/register");

  // // Redirect to appropriate login page if not authenticated
  // if (!isAuthenticated) {
  //   if (!isUserLoginOrRegister && location.pathname.includes("/login")) {
  //     return <Navigate to="/login/user" />;
  //   }
  //   if (!isAdminLoginOrRegister && location.pathname.includes("/admin")) {
  //     return <Navigate to="/admin/login" />;
  //   }
  // }

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
