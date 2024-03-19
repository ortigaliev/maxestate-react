export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}
export interface EstateSearchObj {
  page: number;
  limit: number;
  order: string;
  agency_mb_id?: string;
  estate_collection?: string;
}
