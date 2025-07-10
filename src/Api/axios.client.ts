import axios from "axios";

export const client = axios.create({
  baseURL: "https://studybud-ai-api.onrender.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// client.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("access_token");
//     if (config && token) {
//       const accessToken = JSON.parse(token);
//       config.headers.Authorization = `${accessToken.access_token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   },
// );
