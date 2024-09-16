import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../api/movie-search-api";
import MovieList from "../../components/MovieList/MovieList";


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
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" />
            {/* <Filter /> */}
            <button type="submit">Submit</button>
            {movies.length > 0 && <MovieList movies={movies}/>}
        </form>
        
    );
}
 
export default MoviesPage