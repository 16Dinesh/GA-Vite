import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SpaceDashboardSharpIcon from "@mui/icons-material/SpaceDashboardSharp";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Typography, Divider } from "@mui/material";
import { ArchiveRestore, ChartNoAxesCombined } from "lucide-react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import RequestPageIcon from "@mui/icons-material/RequestPage";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <SpaceDashboardSharpIcon />,
  },
  {
    id: "add",
    label: "Service",
    path: "/admin/addService",
    icon: <ArchiveRestore />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BeenhereIcon />,
  },
  {
    id: "team",
    label: "Team",
    path: "/admin/team",
    icon: <WorkspacesIcon />,
  },
  {
    id: "requests",
    label: "Requests",
    path: "/admin/requests",
    icon: <RequestPageIcon />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="sidebar-MenuItems-Nav">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="sideBar-menuItems-itemsList"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          style={{ width: "256px" }}
        >
          <div style={{ padding: "16px" }}>
            <Typography
              variant="h5"
              component="div"
              className="AdminsideBar-Fragment-cd"
            >
              <ChartNoAxesCombined size={30} />
              <span style={{ color: "#5B864D" }}>G</span>
              <span style={{ color: "#5B864D" }}>A</span> Panel
            </Typography>
          </div>
          <Divider />
          <MenuItems setOpen={setOpen} />
        </div>
      </Drawer>
      <aside className="adminSideBar-c-aside-main">
        <div onClick={() => navigate("/admin/dashboard")} className="">
          <Typography
            variant="h5"
            component="div"
            className="AdminSideBar-Fragment-c"
          >
            <ChartNoAxesCombined size={30} />
            <span style={{ color: "#5B864D" }}>G</span>
            <span style={{ color: "#5B864D" }}>A</span> Panel
          </Typography>
        </div>
        <Divider />
        <MenuItems />
      </aside>
    </Fragment>
  );
}
