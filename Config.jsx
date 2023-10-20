import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://192.168.10.18:5000",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default baseAxios;
