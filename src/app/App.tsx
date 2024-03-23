import React, { useEffect } from "react";
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
import { serverApi } from "./lib/config";
import MemberApiServer from "./apiServer/memberApiServer";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "./lib/sweetAlert";
import { Definer } from "./lib/Definer";
import { Member } from "../types/user";
import "../app/apiServer/verify";

function App() {
  /* INITIALIZATION */

  const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(
    null
  );
  const [path, setPath] = useState();
  const main_path = window.location.pathname;

  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log("=== useEffect: App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/auth/profile.png";
      setVerifiedMemberData(member_data);
    }
  }, [signUpOpen, loginOpen]);

  /** HANDLERS */
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  const handleLogOutRequest = async () => {
    try {
      const memberApiServer = new MemberApiServer();
      await memberApiServer.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };
  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome
          setPath={setPath}
          anchorEl={anchorEl}
          open={open}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          verifiedMemberData={verifiedMemberData}
        />
      ) : main_path.includes("/agency") ? (
        <NavbarAgency
          setPath={setPath}
          anchorEl={anchorEl}
          open={open}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          verifiedMemberData={verifiedMemberData}
        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          anchorEl={anchorEl}
          open={open}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          verifiedMemberData={verifiedMemberData}
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
