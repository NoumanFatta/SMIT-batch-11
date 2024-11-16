import { router } from "./routes/Index";
import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { init, login, logout } from "./slices/authSlice";
import { auth } from "./pages/confic";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(init())
      if (user) {
        dispatch(login({ email: user.email, uid: user.uid }));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
