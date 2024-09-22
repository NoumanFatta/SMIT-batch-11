import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [details, setDetails] = useState({
    fName: "John",
    lName: "Ducket",
  });
  const changeCounter = () => {
    for (let i = 0; i < 10; i++) {
      setCounter((prev) => prev + 1);
    }
  };
  const changeDetails = () => {
    setDetails({ ...details, fName: "Foo" });
    setDetails((prev) => ({ ...prev, lName: "Doe",fullName:"Foo Doe" }));
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={changeCounter}>Change Counter</button>
      <div> {JSON.stringify(details)} </div>
      <button onClick={changeDetails}>Change Details</button>
    </div>
  );
};

export default UseState;
