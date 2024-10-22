import { Outlet } from "react-router-dom";
import './AuthLayout.css';

function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout-sidebar">
        <div className="auth-layout-content">
          <h1>Green Assist Admin </h1>
        </div>
      </div>
      <div className="auth-layout-main">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
