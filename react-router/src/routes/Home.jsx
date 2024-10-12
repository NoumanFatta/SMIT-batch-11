import { useContext } from "react";
import Nested1 from "./Nested1";
import Nested2 from "./Nested2";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { toggleMode } = useContext(ThemeContext);

  const data = { id: 1, userName: "test" };
  return (
    <>
      <button onClick={toggleMode} >Change Theme</button>
      <div>Home</div>
      <Nested1 data={data} jsx={<h1>JSX Render</h1>}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          consequatur nam earum cumque, molestiae maiores et ducimus inventore
          dolores a quo aliquid laborum doloribus quod veniam dolorum ea quasi
          optio.
        </p>
        {data.id && <Nested2 data={data} />}
      </Nested1>
    </>
  );
};

export default Home;
