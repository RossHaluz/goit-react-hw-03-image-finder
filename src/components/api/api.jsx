import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31525049-8cf7ae88f273a5df998b4a2e3';

const FetchPhotosGallery = async (name, page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export default FetchPhotosGallery;
