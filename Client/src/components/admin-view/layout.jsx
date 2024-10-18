import { Outlet } from "react-router-dom";

import { useState } from "react";
import "./AdminView.css"
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

export default function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="admin-layout">
      {/* admin sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="admin-layout-header">
        {/* admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
