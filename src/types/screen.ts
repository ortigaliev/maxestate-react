import { BoBlog } from "./boBlog";
import { Estate } from "./estate";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Agency, Member } from "./user";

/* React App State */
export interface AppRootState {
  homePage: HomePageState;
  agencyPage: AgencyPageState;
  propertyPage: PropertyPageState;
  ordersPage: OrdersPageState;
  blogPage: BlogPageState;
  memberPage: MemberPageState;
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
  randomAgencies: Agency[];
  targetAgencies: Agency[];
  chosenAgency: Agency | null;
  targetEstates: Estate[];
  selectedEstate: Estate | null;
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
/*BLOG PAGE */
export interface BlogPageState {
  targetBoBlogs: BoBlog[];
}

/*MEMBER PAGE */
export interface MemberPageState {
  chosenMember: Member | null;
  chosenMemberBoBlogs: BoBlog[];
  chosenSingleBoBlog: BoBlog | null;
  memberFollowers: Follower[];
  memberFollowings: Following[];
}
