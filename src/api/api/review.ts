import { Review } from "../../model/review";
import { ReviewRequest } from "../request/review";
import { MessageResponse, Response } from "../response/response";
import instance from "../server/server";

export const getReviews = async (
  subjectId: number,
  sort: "recent" | "popular"
): Promise<Review[]> => {
  const { data } = await instance.get<Response<Review[]>>(`/review/${subjectId}?sort=${sort}`);
  return data.response;
};

export const getMyReviews = async (): Promise<Review[]> => {
  const { data } = await instance.get<Response<Review[]>>(`/review/my`);
  return data.response;
};

export const postReview = async (request: ReviewRequest): Promise<void> => {
  await instance.post<MessageResponse>("/review", request);
  return;
};

export const postReviewGood = async (id: number): Promise<void> => {
  await instance.post<MessageResponse>(`/review/good/${id}`);
  return;
};

export const postReviewNotGood = async (id: number): Promise<void> => {
  await instance.post<MessageResponse>(`/review/notgood/${id}`);
  return;
};

export const postReviewBad = async (id: number): Promise<void> => {
  await instance.post<MessageResponse>(`/review/bad/${id}`);
  return;
};

export const postReviewNotBad = async (id: number): Promise<void> => {
  await instance.post<MessageResponse>(`/review/notbad/${id}`);
  return;
};

export const putReview = async (id: number, request: ReviewRequest): Promise<void> => {
  await instance.put<MessageResponse>(`/review/${id}`, request);
  return;
};

export const deleteReview = async (id: number): Promise<void> => {
  await instance.delete<MessageResponse>(`/user/${id}`);
  return;
};
