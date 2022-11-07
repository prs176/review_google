import { Keyword, Sentence } from "../../model/keyword";
import { KeywordRequest } from "../request/keyword";
import { KeywordReponse } from "../response/keyword";
import { apiInstance } from "../server/server";

export const postExtractKeyword = async (reques: KeywordRequest): Promise<Keyword[]> => {
  const { data } = await apiInstance.post<KeywordReponse>("/", reques);
  const keywords = Array<Keyword>().concat(...data.sentences.map((sentence) => sentence.keywords));
  return keywords;
};
