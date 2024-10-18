import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SpaceDashboardSharpIcon from '@mui/icons-material/SpaceDashboardSharp';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { ChartNoAxesCombined } from "lucide-react";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <SpaceDashboardSharpIcon />,
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
    icon: < BeenhereIcon/>,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <List className="sidebar-MenuItems-Nav">
      {adminSidebarMenuItems.map((menuItem) => (
        <ListItem
          key={menuItem.id}
          button
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="sideBar-menuItems-itemsList"
        >
          <ListItemIcon>{menuItem.icon}</ListItemIcon>
          <ListItemText primary={menuItem.label} />
        </ListItem>
      ))}
    </List>
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
              className="AdminsideBar-Fragment-c"
            >
              <ChartNoAxesCombined size={30} />
              Admin Panel
            </Typography>
          </div>
          <Divider />
          <MenuItems setOpen={setOpen} />
        </div>
      </Drawer>
      <aside className="adminSideBar-c-aside-main">
        <div onClick={() => navigate("/admin/dashboard")} className="">
          <Typography variant="h5" component="div" className="AdminSideBar-Fragment-c">
          <ChartNoAxesCombined size={30} />
            Admin Panel
          </Typography>
        </div>
        <Divider />
        <MenuItems />
      </aside>
    </Fragment>
  );
}
