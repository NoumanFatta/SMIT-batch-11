import { createTheme, ThemeProvider } from "@mui/material";
import MainApp from "./components/MainApp";
import { orange } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import { NotFound } from "./routes/NotFound";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
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
