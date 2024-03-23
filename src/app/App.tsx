import React, { useEffect } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";

/* REACT ROUTER DOM */
import { Router, Route, Switch } from "react-router-dom";
import { AgencyPage } from "./screens/AgencyPage";
import { PropertyPage } from "./screens/PropertyPage";
import { BlogPage } from "./screens/BlogPage";
import { ContactPage } from "./screens/ContactPage";
import { HomePage } from "./screens/HomePage";
import { LoginPage } from "./screens/LoginPage";
import { Navbar } from "./components/headers";
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
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  /**INITIALIZATION */

  const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(
    null
  );

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
        : "/auth/avatar.png";
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
    <Router history={history}>
      <Navbar
        anchorEl={anchorEl}
        open={open}
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleLogOutClick={handleLogOutClick}
        handleCloseLogOut={handleCloseLogOut}
        handleLogOutRequest={handleLogOutRequest}
        verifiedMemberData={verifiedMemberData}
      />

      <Switch>
        <Route exact path="/agency" component={AgencyPage}></Route>
        <Route exact path="/estate" component={PropertyPage}></Route>
        <Route exact path="/blog" component={BlogPage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/member" component={MemberPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/card" component={OrderCard}></Route>
        <Route exact path="/" component={HomePage}></Route>
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
