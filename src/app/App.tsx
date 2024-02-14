import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import "../css/App.css";
import { RippleBadge } from "./MaterialTheme/styled";

/* REACT ROUTER DOM */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AgencyPage } from "./screens/AgencyPage";
import { PropertyPage } from "./screens/PropertyPage";
import { BlogPage } from "./screens/BlogPage"; //Community
import { ContactPage } from "./screens/ContactPage";
import { HomePage } from "./screens/HomePage";
import { LoginPage } from "./screens/LoginPage";
import { NavbarHome } from "./components/headers";
import { NavbarAgency } from "./components/headers/agency";
import { NavbarOthers } from "./components/headers/others";
import { useState } from "react";

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/agency") ? (
        <NavbarAgency setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

      {/* <nav>
        <ul>
          <li>
            <Link to={"/agency"}>Agency</Link>
          </li>
          <li>
            <Link to={"/property"}>Property</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </nav> */}

      <Switch>
        <Route path="/agency">
          <AgencyPage />
        </Route>
        <Route path="/property">
          <PropertyPage />
        </Route>
        <Route path="/Blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
