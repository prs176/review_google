export interface Response<T> {
  code: number;
  message: string;
  response: T;
}

export interface MessageResponse {
  code: number;
  message: string;
}
