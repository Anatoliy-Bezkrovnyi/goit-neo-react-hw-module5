import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';
export const fetchPosts = async () => { 
   const {data} = await axios.get('/posts');
   return data.posts;
}
 
export const fetchPost = async (id) => { 
  const {data} = await axios.get(`/post/${id}`);
  return data;
 }