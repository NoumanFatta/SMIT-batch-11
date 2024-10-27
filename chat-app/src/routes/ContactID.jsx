import React from "react";
import { useParams } from "react-router-dom";

const ContactID = () => {
  const params = useParams();
  console.log(params);
  return <div>ContactID</div>;
};

export default ContactID;
