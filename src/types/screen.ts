import { BoBlog } from "./boBlog";
import { Estate } from "./estate";
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
  topSellingEstates: Estate[];
  targetEstates: Estate[];
  estatesByCategory: Estate[];
  chosenEstate: Estate | null;
  memberReviews: null,
}
