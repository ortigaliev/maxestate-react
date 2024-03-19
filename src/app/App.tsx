import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";

/* REACT ROUTER DOM */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { Footer } from "./components/footer";
import OrderCard from "./screens/Card";
import { MemberPage } from "./screens/MemberPage";
import AuthenticationModal from "./components/auth";

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

      <Switch>
        <Route path="/agency">
          <AgencyPage />
        </Route>
        <Route path="/estate">
          <PropertyPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/member">
          <MemberPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/card">
          <OrderCard />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
      <AuthenticationModal/>
    </Router>
  );
}

export default App;
