import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Box, IconButton, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

export default function AdminImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  console.log(isEditMode, "isEditMode");

  function handleImageFileChange(e) {
    console.log(e.target.files, "e.target.files");
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );
    // console.log(response, "response");
    console.log(`id  --> ${response.data.result.asset_id}`)
    console.log(`Created At --> ${response.data.result.created_at}` )
    console.log(`Format --> ${response.data.result.format}` )
    console.log(`Display Name --> ${response.data.result.display_name }`)

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
        mb: 3,
        maxWidth: isCustomStyling ? "none" : 500,
        mx: isCustomStyling ? 0 : "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Upload Image
      </Typography>
      <Box
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{
          border: "2px dashed",
          borderRadius: 2,
          p: 4,
          opacity: isEditMode ? 0.6 : 1,
        }}
      >
        <input
          id="image-upload"
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <Box
            component="label"
            htmlFor="image-upload"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 128,
              cursor: isEditMode ? "not-allowed" : "pointer",
            }}
          >
            <UploadCloudIcon size={40} />
            <Typography variant="body2" color="text.secondary">
              Drag & drop or click to upload image
            </Typography>
          </Box>
        ) : imageLoadingState ? (
          <CircularProgress />
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <FileIcon sx={{ fontSize: 40, color: "primary.main", mr: 1 }} />
              <Typography variant="body2" fontWeight="medium">
                {imageFile.name}
              </Typography>
            </Box>
            <IconButton
              color="default"
              onClick={handleRemoveImage}
              aria-label="Remove File"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              <XIcon size={30} />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}
