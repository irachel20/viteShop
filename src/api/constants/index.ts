const baseURL = "https://reqres.in";
import axios from "axios";

export const instance = axios.create({
  baseURL,
  timeout: 25000,
});
