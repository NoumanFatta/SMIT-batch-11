import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { Logincheker, Routeprotected } from "../component/ContextCheker";
import Signup from "../pages/signup";
import Login from "../pages/Login";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import ContactID from "./ContactID";
import Layout from "../component/Layout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Logincheker />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<Layout />}>
        <Route element={<Routeprotected />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:id" element={<ContactID />} />
        </Route>
      </Route>
    </>
  )
);
