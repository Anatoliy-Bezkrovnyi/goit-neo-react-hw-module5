import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/movie-search-api"; 
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css"



const HomePage = () => { 
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
       
    
    
    useEffect(() => {
        const getMovies = async () => {
            setIsLoading(true);
            setError(false);
           try {
               const data = await fetchTrendingMovies();
               setMovies(data);
           } catch (error) {
                console.log("error:", error);
                setError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        getMovies();
    }, []); 

   

    return (
        <div>
            {isLoading && <Loading/>}
            {error && <Error />} 
            <h1 className={styles.title}>Trending today</h1>
            {movies.length > 0 && <MovieList movies={movies}/>}
        </div>
    )
}
 
export default HomePage;