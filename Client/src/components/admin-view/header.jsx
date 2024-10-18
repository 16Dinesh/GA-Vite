import { AlignJustify, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth-slice";
import Button from '@mui/joy/Button';


export default function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header className="admin-header-c">
      <Button onClick={() => setOpen(true)} className="admin-Header-BtnC">
        <AlignJustify />
        <span className="admin-header-c-Toggle-menu-sr-only">Toggle Menu</span>
      </Button>
      <div className="admin-header-c-logoutBtn-handle">
        <Button
          onClick={handleLogout}
          className="admin-header-c-logout-button"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}
