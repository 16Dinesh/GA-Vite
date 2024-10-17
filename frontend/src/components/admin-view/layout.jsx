import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

export default function AdminLayout() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* {admin sideBar} */}
      <AdminSideBar />
      <div className="flex flex-1 flex-col">
        {/* admin Header */}
        <AdminHeader />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
