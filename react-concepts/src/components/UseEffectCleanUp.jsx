import React, { useEffect } from "react";

const UseEffectCleanUp = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello world!");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const scroll = () => {
        console.log("Scrolling")
    };
    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);
  return <div>UseEffectCleanUp</div>;
};

export default UseEffectCleanUp;
