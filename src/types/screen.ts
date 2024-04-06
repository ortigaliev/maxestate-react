import { BoBlog } from "./boBlog";
import { Estate } from "./estate";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Agency, Member } from "./user";

/* React App State */
export interface AppRootState {
  memberPage: MemberPageState;
  homePage: HomePageState;
  propertyPage: PropertyPageState;
  ordersPage: OrdersPageState;
  blogPage: BlogPageState;
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
  memberFollowing: Following[];
}
