import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjA4MWJmMDBkMDdhYzhmMDRhNWUyZjMzZmZmOTUxNiIsIm5iZiI6MTcyNjE3MDA0OS40MzgzNCwic3ViIjoiNjZlMzNjMzJmNDY3YzJhZDYyZjkyNmU2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8o5Yev22ShnXRt4e8Vpy5ZYYzPxzdpHp0Y-e7DFSg58'
  }
};
export const fetchTrendingMovies = async () => { 
  const url = 'trending/movie/day?language=en-US';
  const response = await axios.get(url, options);
  return response.data.results;
}
 
export const fetchMovie = async (id) => { 
  const url = `movie/${id}`;
  const {data} = await axios.get(url, options);
  return data;
}

export const fetchMovieCast = async (id) => { 
  const url = `movie/${id}/credits`;
  const {data} = await axios.get(url, options);
  return data.cast;
}

export const fetchMovieReviews = async (id) => { 
  const url = `movie/${id}/reviews`;
  const {data} = await axios.get(url, options);
  return data.results;
}
 


