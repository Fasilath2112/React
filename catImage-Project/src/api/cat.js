import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
});

export const fetchCatImage = () => {
  return instance.get('images/search').then(
    (res) => res.data,
    (error) => {
      console.log(error, "Error fetching cat image!");
      throw error;
    }
  );
};
