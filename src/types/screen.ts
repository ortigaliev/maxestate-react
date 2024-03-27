import { BoBlog } from "./boBlog";
import { Estate } from "./estate";
import { Agency } from "./user";

/* React App State */
export interface AppRootState {
  homePage: HomePageState;
  agencyPage: AgencyPageState;
}

/* HomePage */
export interface HomePageState {
  latestEstate: Estate[];
  bestAgencies: Agency[];
  trendEstate: Estate[];
  bestBoBlogs: BoBlog[];
  newsBoBlogs: BoBlog[];
}

/* Agency Page */
export interface AgencyPageState {
  targetAgencies: Agency[];
  randomAgencies: Agency[];
  chosenAgency: Agency | null;
  targetEstates: Estate[];
  chosenEstate: Estate | null;
}
