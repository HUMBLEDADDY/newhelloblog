import axios from "axios";

const http = axios.create({
  baseURL: "http://zhouxug.cn:8080/hello/",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // config.headers.Authorization = "Bearer " + localStorage.token || "";
    // config.headers.token = localStorage.token || "";
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export default http;
