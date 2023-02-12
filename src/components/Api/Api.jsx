import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '33208866-b30484cdea6ad4b23b3d7b77d';

const fetchImages = async (name, page) => {
    const response = await axios.get(`?key=${KEY}&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};
    
export default fetchImages;
       

