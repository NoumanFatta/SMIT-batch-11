import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from "../pages/Login";
import About from "./About";
import Contact from "./Contact";
import ContactID from "./ContactID";
import SignupForm from "../pages/Signup";
import { LoginChecker, ProtectedRoutes } from "../components/RouteChecker";
import Home from "./Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginChecker />}>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactID />} />
      </Route>
    </>
  )
);
