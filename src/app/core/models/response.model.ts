export interface ResponseMetaData {
  code: number;
  currentPage: number;
  message: string;
  pageCount: number;
  perPage: number;
  rateLimit: RateLimitModel;
  success: boolean;
  totalCount: number;
}

export interface RateLimitModel {
  limit: number;
  remaining: number;
  reset: number;
}

export interface ResponseApiModel<T> {
  _meta: ResponseMetaData;
  result: T[];
}
