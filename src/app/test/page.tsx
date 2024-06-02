"use client";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import useImageUpload from "@/hook/useImageUpload";
import React, { useState } from "react";

const ImageUploadComponent = () => {
  const {
    encodeImageFileAsURL,
    uploadImages,
    imagesBase64,
    isUploading,
    error,
  } = useImageUpload();
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [images, setImages] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(event.target.files);
      const previews = Array.from(event.target.files)
        .slice(0, 3)
        .map((file) => URL.createObjectURL(file));
      setPreviewImages(previews);
      // encodeImageFileAsURL(event.target.files, "comment");
    }
  };

  const handleUpload = () => {
    uploadImages();
  };

  const { data } = useGetComments({ talkRoomId: "629" });
  console.log(data);

  return (
    <div>
      <h1>Image Upload</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      <div>
        {previewImages.map((preview, index) => (
          <img key={index} src={preview} alt={`Uploaded ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploadComponent;
