import Form from "./components/Form";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import style from "./css/App.module.css";

function App() {
  return (
    <>
      <p className={style.para}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        quibusdam repellat laboriosam incidunt rerum amet. Earum deleniti,
        necessitatibus provident saepe excepturi obcaecati repellat illo
        doloribus eaque amet beatae fugit aut!
      </p>
      {/* <UseState /> */}
      {/* <Form /> */}
      {/* <UseRef /> */}
      <UseEffect />
    </>
  );
}

export default App;
