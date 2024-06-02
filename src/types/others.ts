export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}
export interface EstateSearchObj {
  page: number;
  limit: number;
  order: string;
  search?: string;
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

export interface ChatMessage {
  msg: string;
  mb_id: string;
  mb_nick: string;
  mb_image: string;
}

export interface ChatGreetMsg {
  text: string;
}

export interface ChatInfoMsg {
  total: number;
}
