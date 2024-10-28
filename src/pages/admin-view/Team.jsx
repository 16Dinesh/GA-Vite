import Button from "@mui/joy/Button";
import { Box, Drawer, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { addTeamSearchFormElements } from "../../config";
import CommonForms from "../../components/common/CommonForms";
import { ShoppingCart } from "lucide-react";
import "../../styles/default-pages/AdminPageCommon.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const initialFormData = {
  image: null,
  name: "",
  service: "",
  item: "",
  price: "",
};

export default function AdminPageTeam() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);

  function onSubmit(e) {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    setFormData(initialFormData);
    setOpenCreateProductsDialog(false);
  }

  return (
    <Fragment>
      <div className="Admin-page-btn-Search">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Search Team Member
        </Button>
      </div>
      <div className="Admin-products-side-tap">
        <Drawer
          anchor="right"
          open={openCreateProductsDialog}
          onClose={() => setOpenCreateProductsDialog(false)}
        >
          <Box sx={{ width: 300, padding: 2, overflow: "auto" }}>
            <GroupAddIcon size={30} />
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              className="admin-product-sideBar-heading"
            >
              Search Team Member
            </Typography>
            <Box className="admin-product-Form-Box">
              <CommonForms
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormData}
                buttonText="Search"
                formControls={addTeamSearchFormElements}
              />
            </Box>
          </Box>
        </Drawer>
      </div>
    </Fragment>
  );
}
