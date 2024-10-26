import { useState, useCallback, useMemo } from "react";
import Todos from "./Todos";

const TodoComp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />

      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default TodoComp;
