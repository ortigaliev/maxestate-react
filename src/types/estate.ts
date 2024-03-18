export interface MeLiked {
  mb_id: string;
  like_ref_id: string;
  my_favorite: boolean;
}

export interface Estate {
  _id: string;
  estate_name: string;
  estate_collection: string;
  estate_status: string;
  estate_price: number;
  estate_discount: number;
  estate_left_cnt: number;
  estate_type: string;
  estate_description: string;
  estate_images: string[];
  estate_likes: number;
  estate_views: number;
  agency_mb_id: string;
  createdAt: Date;
  updatedAt: Date;
  me_liked: MeLiked[];
}
