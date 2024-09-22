import React, { useState } from "react";

const Form = () => {
  const [formDetails, setFormDetails] = useState({
    email: "test@test.com",
    password: "123",
  });
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const handleSumbit = (e) => {
    e.preventDefault();
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
        type="text"
        name="email"
        value={formDetails.email}
        onChange={(e) => onFormChange(e)}
      />
      <input
        type={isPwdVisible ? "text" : "password"}
        name="password"
        value={formDetails.password}
        onChange={(e) => onFormChange(e)}
      />
      <button onClick={togglePwdVis}>
        {isPwdVisible ? "Hide" : "Show"} Password
      </button>
      <button>Submit</button>
    </form>
  );
};

export default Form;
