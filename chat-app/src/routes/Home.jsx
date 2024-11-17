import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reject, success } from "../slices/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todo/1"
        );
        dispatch(success(response.data));
      } catch (error) {
        dispatch(reject());
        console.log("Err", error);
      }
    })();
  }, []);
  return <div>Home</div>;
};

export default Home;
