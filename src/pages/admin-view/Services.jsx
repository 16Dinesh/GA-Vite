import Button from "@mui/joy/Button";
import { Box, Drawer, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import CommonForms from "../../components/common/CommonForms";
import { Layers3 } from "lucide-react";
import { addServiceFormElements } from "../../config";
import AdminImageUpload from "../../components/admin-view/image-upload";

const initialFormData = {
  image: null,
  name: "",
  service: "",
  item: "",
  price: "",
};

export default function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

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
          Add New Service
        </Button>
      </div>
      <div className="Admin-products-side-tap">
        <Drawer
          anchor="right"
          open={openCreateProductsDialog}
          onClose={() => setOpenCreateProductsDialog(false)}
        >
          <Box sx={{ width: 300, padding: 2, overflow: "auto" }}>
            <Layers3 size={30} />
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              className="admin-product-sideBar-heading"
            >
              Add New Product
            </Typography>
            <Box className="admin-product-Form-Box">
              <AdminImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                isEditMode={currentEditedId !== null}
              />
              <CommonForms
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormData}
                buttonText="Add"
                formControls={addServiceFormElements}
              />
            </Box>
          </Box>
        </Drawer>
      </div>
    </Fragment>
  );
}
