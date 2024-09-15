import { useState } from "react";

const Square = ({ handleClick, value,}) => {
  return <button className="square" onClick={handleClick}> {value} </button>;
};

export default Square;
