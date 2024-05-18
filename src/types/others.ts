export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}
export interface EstateSearchObj {
  page: number;
  limit: number;
  order?: string;
  agency_mb_id?: string;
  estate_collection?: string;
  estate_price_range?: string;
  estate_bed_bath_count?: string;
  estate_category?: string;
  estate_amenities?: string;
  estate_price?: number;
}

export interface MemberLiken {
  like_group: string;
  like_status: number;
  like_ref_id: string;
}
export interface CartItem {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}
