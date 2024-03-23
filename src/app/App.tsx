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
  /* INITIALIZATION */
  const [path, setPath] = useState();
  const main_path = window.location.pathname;

  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  /** HANDLERS */
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
        />
      ) : main_path.includes("/agency") ? (
        <NavbarAgency
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
        />
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
      <AuthenticationModal
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
        signUpOpen={signUpOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
    </Router>
  );
}
export default App;
