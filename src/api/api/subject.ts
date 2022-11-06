import { DetailSubject, Subject } from "../../model/subject";
import { SubjectRequest } from "../request/subject";
import { MessageResponse, Response } from "../response/response";
import instance from "../server/server";

export const getSubjects = async (keyword: string): Promise<Subject[]> => {
  const { data } = await instance.get<Response<Subject[]>>(`/subject/${keyword}`);
  return data.response;
};

export const getDetailSubject = async (subjectId: number): Promise<DetailSubject> => {
  const { data } = await instance.get<Response<DetailSubject>>(`/subject/detail/${subjectId}}`);
  return data.response;
};

export const postImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  var fileName = file.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  formData.append("image", file, fileName);

  const { data } = await instance.post<Response<string>>("/subject/image", formData);
  return data.response;
};

export const postSubject = async (request: SubjectRequest): Promise<void> => {
  await instance.post<MessageResponse>(`/subject`, request);
  return;
};
