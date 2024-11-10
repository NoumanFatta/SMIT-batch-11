import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import { v2 as cloudinary } from "cloudinary";

const Image = () => {
  cloudinary.config({
    cloud_name: "dvp2vsjy4",
    api_key: "863524572944738",
    api_secret: "<your_api_secret>", // Click 'View API Keys' above to copy your API secret
  });
  const cld = new Cloudinary({ cloud: { cloudName: "dvp2vsjy4" } });
  const [file, setFile] = useState();
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image("cld-sample-5")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio
  //   const uploadImg = async () => {
  //     // Upload an image
  //     const uploadResult = await cloudinary.uploader
  //       .upload(
  //         file,
  //         {
  //           public_id: "shoes",
  //         }
  //       )
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //       console.log(uploadResult);
  //   };
  return (
    <>
      <AdvancedImage cldImg={img} />
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Upload</button>
    </>
  );
};

export default Image;
