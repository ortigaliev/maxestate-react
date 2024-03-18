import { MeLiked } from "./estate";
import { Member } from "./user";

export interface BoBlog {
  _id: string;
  blog_subject: string;
  blog_content: string;
  blog_image: string;
  bo_id: string;
  blog_status: string;
  blog_likes: number;
  blog_views: number;
  mb_id: string;
  createdAt: Date;
  updatedAt: Date;
  member_data: Member;
  me_liked: MeLiked[];
}
