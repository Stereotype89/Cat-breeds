import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_NreVBRaiTNIyRR1BCOEqjUAHGVDMN42w4Hd8yZANNyDIMY3M7LwsHCCZ9RVLnnG5';

const END_POINTS = {
  breeds: 'breeds',
  info: 'images/search',
};

export const fetchBreeds = () => {
  return axios(`${END_POINTS.breeds}`);
};

export const fetchCatByBreed = breedId => {
  return axios(`${END_POINTS.info}?breed_ids=${breedId}`);
};
