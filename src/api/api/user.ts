import { User } from "../../model/user";
import { LoginRequest, RegisterRequest } from "../request/user";
import { MessageResponse, Response } from "../response/response";
import instance from "../server/server";
import { removeCookie, setCookie } from "../token/cookie";
import { getToken } from "../token/token";

export const postLogin = async (request: LoginRequest): Promise<void> => {
  const { data } = await instance.post<Response<string>>(`/user/login`, request);
  removeCookie("token");
  setCookie("token", data.response, 1);
  return;
};

export const postRegister = async (request: RegisterRequest): Promise<void> => {
  await instance.post<MessageResponse>(`/user/register`, request);
};

export const getMyUser = async (): Promise<User> => {
  const { data } = await instance.get<Response<User>>(`/user`);
  return data.response;
};
