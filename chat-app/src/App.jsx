import Authprovider from "./context/Authcontext";
import Image from "./routes/Image";
import { router } from "./routes/Index";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Authprovider>
        <Image />
        {/* <RouterProvider router={router} /> */}
      </Authprovider>
    </>
  );
}

export default App;
