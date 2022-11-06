import { getCookie } from "./cookie";

export const getToken = (): string => {
  return getCookie("token") as string;
};
