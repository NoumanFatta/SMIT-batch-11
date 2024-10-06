import { createTheme, ThemeProvider } from "@mui/material";
import MainApp from "./components/MainApp";
import { orange } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { action, loader } from "./routes/Root";
import { NotFound } from "./routes/NotFound";
import Contact, { loader as contactLoader } from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    loader: loader,
    action: action,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        children: [
          {
            index: true,
            // path: "main",
            element: <h1>Hello asdaddaad</h1>,
          },
        ],
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(25, 27, 89)",
    },
    secondary: {
      main: orange[100],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
