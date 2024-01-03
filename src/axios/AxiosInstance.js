import axios from "axios";

// const BASE_URL = "https://api.escuelajs.co/api/v1";
let BASE_URL = import.meta.env.VITE_API_BASE_URL

function getToken() {
  const accessToken = window.localStorage.getItem("access_token");
  return accessToken;
}

export const AxiosInstancePublic = axios.create({
  baseURL:  BASE_URL,
});

export const AxiosInstanceProtected = axios.create({
  baseURL: BASE_URL ,
  headers: {
    "Content-Type":"application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

// AxiosInstanceProtected.interceptors.request.use(config => {
//   return config;
// });
