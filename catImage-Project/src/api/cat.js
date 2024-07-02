import axios from "axios";

const url = import.meta.env.VITE_API_URL

const instance = axios.create({
  baseURL: url ,
});

export const fetchCatImage = () => {
  return instance.get("images/search").then(
    (res) => res.data,
    (error) => {
      console.log(error, "Error fetching cat image!");
      throw error;
    }
  );
};
