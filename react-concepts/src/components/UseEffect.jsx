import { useEffect, useState } from "react";
import UseEffectCleanUp from "./UseEffectCleanUp";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Hello world");
    return () => {
      console.log("=====================");
    };
  }, [counter]);
  useEffect(() => {
    (async () => {
      console.log("API is being fetched...");
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const [showComp, setShowComp] = useState(true);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((elem) => (
          <div key={elem.id}>
            <span>{elem.title}</span>
            <input type="checkbox" defaultChecked={elem.completed} />
          </div>
        ))
      )}

      <p>{counter}</p>
      <div>UseEffect</div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
      {showComp && <UseEffectCleanUp />}
      <button onClick={() => setShowComp(false)}>Hide Component</button>
    </>
  );
};

export default UseEffect;
