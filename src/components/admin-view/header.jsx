import { AlignJustify, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { adminLogoutUser } from "../../store/auth-slice";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

export default function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    // Dispatch the logout action
    dispatch(adminLogoutUser()).then(() => {
        // After the logout action completes, navigate to the login page
        navigate("/admin/login");
    });
}

  return (
    <header className="admin-header-c">
      <Button onClick={() => setOpen(true)} className="admin-Header-BtnC">
        <AlignJustify />
        <span className="admin-header-c-Toggle-menu-sr-only">Toggle Menu</span>
      </Button>
      <div className="admin-header-c-logoutBtn-handle">
        <Button onClick={handleLogout} className="admin-header-c-logout-button">
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}
