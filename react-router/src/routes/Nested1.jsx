import React from "react";

const Nested1 = (props) => {
  const { children, data, jsx } = props;
  return (
    <>
      <div>Nested1</div>
      {children}
      {/* <Nested2 data={data} /> */}
      {jsx}
    </>
  );
};

export default Nested1;
