import { useParams } from "react-router-dom";

const ContactID = () => {
  const params = useParams();
  console.log(params.id);
  return <div>ContactID</div>;
};

export default ContactID;
