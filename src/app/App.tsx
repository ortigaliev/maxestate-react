import React, { useEffect } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
/* REACT ROUTER DOM */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { CartItem } from "../types/others";
import { Estate } from "../types/estate";

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

  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);

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

  const onAdd = async (estate: Estate) => {
    console.log("estate::", estate);
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === estate._id
    );
    if (exist) {
      const cart_updated = cartItems.map((item: CartItem) =>
        item._id === estate._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      await sweetTopSmallSuccessAlert("Estate succesfully added", 1200, false);
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const new_item: CartItem = {
        _id: estate._id,
        quantity: 1,
        name: estate.estate_name,
        price: estate.estate_price,
        image: estate.estate_images[0],
      };
      const cart_updated = [...cartItems, { ...new_item }];
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onRemove = async (item: CartItem) => {
    const item_data: any = cartItems?.find(
      (ele: CartItem) => ele._id === item._id
    );
    if (item_data.quantity === 1) {
      const cart_updated = cartItems.filter(
        (ele: CartItem) => ele._id !== item._id
      );
      await sweetTopSmallSuccessAlert("success", 700, false);
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const cart_updated = cartItems.map((ele: CartItem) =>
        ele._id === item._id
          ? { ...item_data, quantity: item_data.quantity - 1 }
          : ele
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onDelete = async (item: CartItem) => {
    const cart_updated = cartItems.filter(
      (ele: CartItem) => ele._id !== item._id
    );
    await sweetTopSmallSuccessAlert("success", 700, false);
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  };
  const onDeleteAll = () => {};

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
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      ) : (
        /* : main_path.includes("/agency") ? (
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
      ) */
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
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      )}
      <Switch>
        {/*  <Route path="/agency">
          <AgencyPage />
        </Route> */}
        <Route path="/estate">
          <PropertyPage onAdd={onAdd} />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/member">
          <MemberPage verifiedMemberData={verifiedMemberData}/>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/order">
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
