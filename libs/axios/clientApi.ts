import axios from "axios";
export * from "axios";

export const clientApi = axios.create({});

clientApi.interceptors.request.use((req) => {
  req.baseURL = window.location.origin;

  return req;
});
