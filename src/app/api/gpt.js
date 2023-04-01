import { api } from "../../app/hooks/useAxios";

export const uploadSpeech = (data) => {
  return api({
    method: "POST",
    url: "/gpt/question",
    data,
  });
};
