import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24479439-fad8fccb3aca2f73405340c7a';
axios.defaults.baseURL = BASE_URL;

const fetchImages = async (input, page) => {
  const queryParams = new URLSearchParams({
    key: API_KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: page,
  });

  const { data } = await axios.get('?' + queryParams.toString());
  return data;
};

export default fetchImages;
