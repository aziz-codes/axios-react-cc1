import axios from "axios";
const BASE_URL = "https://reqres.in/api";

export const getUsers = async () => {
  return await axios.get(`${BASE_URL}/users`);
};
