import React, { useContext, useEffect, useMemo, useState } from "react";
import { DummyContext } from "../context/DummyContext";

const B = () => {
  const heavyCalculation = () => {
    return 1 + 2;
  };
  const memoCalc = useMemo(heavyCalculation, []);
  const { setData } = useContext(DummyContext);
  const [state, setState] = useState();
  useEffect(() => {
    setData({ data: "data" });
  }, []);
  console.log("Re-rendering....");
  return (
    <div>
      B<p>{memoCalc}</p>
      <input type="text" onChange={(e) => setState(e.target.value)} />
    </div>
  );
};

export default B;
