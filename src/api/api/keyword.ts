import { Keyword, Sentence } from "../../model/keyword";
import { KeywordRequest } from "../request/keyword";
import { KeywordReponse } from "../response/keyword";
import { apiInstance } from "../server/server";

export const postExtractKeyword = async (reques: KeywordRequest): Promise<Keyword[]> => {
  const { data } = await apiInstance.post<KeywordReponse>("/", reques);
  var keywords = Array<Keyword>()
    .concat(...data.sentences.map((sentence) => sentence.keywords))
    .reduce<Record<string, number>>((acc, keyword) => {
      if (acc[keyword.word] === undefined) {
        acc[keyword.word] = 0;
      }
      acc[keyword.word] += keyword.freq;
      return acc;
    }, {});

  return Object.keys(keywords).map((key) => {
    return {
      word: key,
      freq: keywords[key],
    };
  });
};
