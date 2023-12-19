import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";
function getToken() {
  const accessToken = window.localStorage.getItem("access_token");
  return accessToken;
}

export const AxiosInstancePublic = axios.create({
  baseURL: BASE_URL,
});

export const AxiosInstanceProtected = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// AxiosInstanceProtected.interceptors.request.use(config => {
//   return config;
// });
