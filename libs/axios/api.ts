import axios from "axios";
export * from "axios";

export const api = axios.create({});

api.interceptors.request.use((req) => {
  req.baseURL = process.env.NEXT_PUBLIC_API_URL;
  
  return req;
});
