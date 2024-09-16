import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.css"

const MovieList = ({ movies = []}) => { 

    return (
        <ul className={styles.list}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>         
    );
}
 
export default MovieList