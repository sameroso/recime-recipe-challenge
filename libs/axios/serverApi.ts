import axios from "axios";
// import { headers } from "next/headers";

export const serverApi = axios.create({});

serverApi.interceptors.request.use((req) => {
  // const headerList = headers();
  // const protocol = headerList.get("x-forwarded-proto");
  // const host = headerList.get("x-forwarded-host");
  // req.baseURL = `${protocol}://${host}`;
  req.baseURL = `http://localhost:3000`;

  return req;
});
