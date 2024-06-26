import { ChangeEvent, useState } from "react";

type UseImageUpload = {
  encodeImageFileAsURL: (fileList: FileList, type: string) => void;
  uploadImages: () => Response | undefined | null | Promise<any>;
  imagesBase64: FormData | undefined;
  previewImage: string[];
  isUploading: boolean;
  error: Error | null;
};

type Response = {
  code: number;
  status: string;
  message: string;
  data: string[];
};

const useImageUpload = (): UseImageUpload => {
  const [imagesBase64, setImagesBase64] = useState<FormData>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const encodeImageFileAsURL = (fileList: FileList, type: string) => {
    onUpload(fileList);
    const files = Array.from(fileList).slice(0, 3);
    const formData = new FormData();
    files.forEach((img) => {
      formData.append("files", img);
    });
    formData.append("dirName", type);
    setImagesBase64(formData);
  };

  const onUpload = (fileList: FileList) => {
    if (fileList) {
      const newImageSrcs: string[] = [];
      Array.from(fileList).forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          newImageSrcs.push(reader.result as string);
          if (newImageSrcs.length === fileList.length) {
            setPreviewImage(newImageSrcs);
          }
        };
      });
    }
  };

  const uploadImages = async () => {
    if (!imagesBase64) return null;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/v1/s3`, {
        method: "POST",
        body: imagesBase64,
      });

      const data = await response.json();
      setIsUploading(false);
      console.log("리턴 데이터", data);
      return data;
    } catch (error: any) {
      console.error("Error:", error);
      setError(error);
      setIsUploading(false);
      return null;
    }
  };

  return {
    encodeImageFileAsURL,
    uploadImages,
    previewImage,
    imagesBase64,
    isUploading,
    error,
  };
};

export default useImageUpload;
