import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../api/movie-search-api";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import styles from "./MoviesPage.module.css"


const MoviesPage = () => { 

    const [params, setParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.elements.search.value;
        setParams({query: value});
    } 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const data = await searchMovie(params);
                setMovies(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovies();
    }, [params])

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" name="search" />           
                <button type="submit">Search</button>            
            </form>
            {isLoading && <Loading />}
            {error && <Error />}
            {movies.length > 0 && <MovieList movies={movies}/>}
        </>
        
    );
}
 
export default MoviesPage