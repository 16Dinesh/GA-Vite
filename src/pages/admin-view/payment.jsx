import Button from "@mui/joy/Button";
import { Box, Drawer, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { addProductFormElements } from "../../config";
import CommonForms from "../../components/common/CommonForms";
import { ShoppingCart } from "lucide-react";
import "../../styles/default-pages/AdminPageCommon.css";
import AdminImageUpload from "../../components/admin-view/image-upload";

const initialFormData = {
  image: null,
  name: "",
  service: "",
  item: "",
  price: "",
};

export default function AdminPayment() {
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
    <div>payment</div>
  )
}
