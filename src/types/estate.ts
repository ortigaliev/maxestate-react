export interface MeLiked {
  mb_id: string;
  like_ref_id: string;
  my_favorite: boolean;
}

export interface Estate {
  _id: string;
  estate_name: string;
  estate_year_build: number;
  estate_id: string;
  estate_area: number;
  estate_collection: string;
  estate_status: string;
  estate_price: number;
  estate_price_range: string;
  estate_bed_bath_count: string;
  estate_rooms: number;
  estate_bath: number;
  estate_bed: number;
  estate_discount: number;
  estate_left_cnt: number;
  estate_category: string;
  estate_amenities: string;
  estate_address: string;
  estate_description: string;
  estate_images: string[];
  estate_likes: number;
  estate_views: number;
  agency_mb_id: string;
  agency_mb_images: string[];
  createdAt: Date;
  updatedAt: Date;
  me_liked: MeLiked[];
}
