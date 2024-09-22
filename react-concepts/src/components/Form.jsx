import React, { useRef, useState } from "react";

const Form = () => {
  const formFieldsRef = useRef([]);
  const [formDetails, setFormDetails] = useState({
    email: "test@test.com",
    password: "123",
  });
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(formFieldsRef.current);
    console.log(formDetails);
  };

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const togglePwdVis = () => {
    setIsPwdVisible(!isPwdVisible);
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        ref={(el) => (formFieldsRef.current["email"] = el)}
        type="text"
        name="email"
        // value={formDetails.email}
        // onChange={(e) => onFormChange(e)}
      />
      <input
        type={isPwdVisible ? "text" : "password"}
        name="password"
        ref={(el) => (formFieldsRef.current["password"] = el)}
        // value={formDetails.password}
        // onChange={(e) => onFormChange(e)}
      />
      <button onClick={togglePwdVis}>
        {isPwdVisible ? "Hide" : "Show"} Password
      </button>
      <button>Submit</button>
    </form>
  );
};

export default Form;
