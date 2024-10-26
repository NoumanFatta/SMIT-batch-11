import React, { useCallback, useContext, useMemo, useState } from "react";
import UseCallBack from "../components/UseCallBack";

const A = () => {
  const [state, setState] = useState("");
  console.log("A is re rendering");
  const evtListener = useCallback(() => {
    // console.log("Submittin....");
  }, []);

  // const evtListener = useMemo(() => {
  //   return () => {
  //     console.log("hello");
  //   };
  // }, []);
  return (
    <div>
      A<button onClick={() => setState(Math.random())}>Change State</button>
      <UseCallBack handleSubmit={evtListener} />
      <button
        onClick={() => {
          document.removeEventListener("mousemove", evtListener);
        }}
      >
        Remove listener
      </button>
    </div>
  );
};

export default A;
