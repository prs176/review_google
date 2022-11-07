import axios, { AxiosError } from "axios";
import { getToken } from "../token/token";
const baseURL = process.env.REACT_APP_BASE_URL;
const apiURL = "https://api.matgim.ai/api-keyword";

const instance = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  config.headers!.Authorization = token;

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const apiInstance = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": `${process.env.REACT_APP_API_KEY}`,
  },
});

apiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
