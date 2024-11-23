import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reject, success } from "../slices/dataSlice";
const uploadToCloudinary = async (imageFile) => {
  console.log(imageFile)
  try {
    const cloudName = "dvp2vsjy4";
    const uploadPreset = "test_chatapp";

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    const data = await response.json();
    console.log(data);
    return data.secure_url;
  } catch (error) {
    console.log("Errr=====", error);
  }
};

const Home = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/todo/1"
  //       );
  //       dispatch(success(response.data));
  //     } catch (error) {
  //       dispatch(reject());
  //       console.log("Err", error);
  //     }
  //   })();
  // }, []);

  return (
    <>
      <input type="file" onChange={(e) => {
        setFile(e.target.files[0])
      }} />
      <button onClick={() => uploadToCloudinary(file)}>Home</button>;
    </>
  );
};

export default Home;
