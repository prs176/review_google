import {
  DeletionReportRequest,
  ModificationReportRequest,
  ReduplicationReportRequest,
} from "../request/report";
import { MessageResponse } from "../response/response";
import instance from "../server/server";

export const postReduplicationReport = async (
  subjectId: number,
  request: ReduplicationReportRequest
): Promise<void> => {
  await instance.post<MessageResponse>(`/report/reduplication/${subjectId}`, request);
  return;
};

export const postModificationReport = async (
  subjectId: number,
  request: ModificationReportRequest
): Promise<void> => {
  await instance.post<MessageResponse>(`/report/modification/${subjectId}`, request);
  return;
};

export const postDeletionReport = async (
  subjectId: number,
  request: DeletionReportRequest
): Promise<void> => {
  await instance.post<MessageResponse>(`/report/deletion/${subjectId}`, request);
  return;
};
