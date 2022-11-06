import { Sentence } from "../../model/keyword";
import { KeywordRequest } from "../request/keyword";
import { apiInstance } from "../server/server";

export const postExtractKeyword = async (reques: KeywordRequest) => {
  await apiInstance.post<Sentence>("/");
  return;
};
