import Authprovider from "./context/Authcontext";
import { router } from "./routes/Index";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </>
  );
}

export default App;
