import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://167.99.205.107:5000",
  // baseURL: "http://167.99.205.107:5000",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default baseAxios;
