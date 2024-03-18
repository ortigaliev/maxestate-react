import { BoBlog } from "./boBlog";
import { Estate } from "./estate";
import { Agency } from "./user";

export interface AppRootState {
  homePage: HomePageState;
}

export interface HomePageState {
  latestEstate: Estate[];
  bestAgency: Agency[];
  trendEstate: Estate[];
  bestBoBlogs: BoBlog[];
  newsBoBlogs: BoBlog[];
}
