import axios from 'axios';

const KEY = '60778458bdbdfa7e14ca7e73fe4a1fef';

const fetchImg = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`
    )
    .then(res => res.data)
    .then(console.log);
};

export default fetchImg;
