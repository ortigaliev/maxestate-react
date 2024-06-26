import { MeLiked } from "./estate";
import { Member } from "./user";

export interface BoBlog {
  _id: string;
  blog_subject: string;
  blog_content: string;
  blog_image?: string | null;
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

export interface SearchBlogsObj {
  bo_id: string;
  page: number;
  limit: number;
  order?: string | null;
}

export interface SearchMemberBlogsObj {
  page: number;
  limit: number;
  mb_id: string;
}

export interface BoBlogInput {
  blog_subject: string;
  blog_content: string;
  blog_image: string;
  bo_id: string;
}
