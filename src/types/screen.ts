import { BoBlog } from "./boBlog";
import { Estate } from "./estate";
import { Order } from "./order";
import { Agency } from "./user";

/* React App State */
export interface AppRootState {
  homePage: HomePageState;
  propertyPage: PropertyPageState;
}

/* HomePage */
export interface HomePageState {
  latestEstate: Estate[];
  bestAgencies: Agency[];
  trendEstate: Estate[];
  bestBoBlogs: BoBlog[];
  newsBoBlogs: BoBlog[];
}

/* Propert Page */
export interface PropertyPageState {
  allEstates: Estate[];
  estatesByCategory: Estate[];
  chosenEstate: Estate | null;
  estateReviews: null;
}

/**ORDERS PAGE */
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
