
import { Link, Outlet, useParams } from "react-router-dom"
import { useEffect, useRef } from "react";
import { useState } from "react";
import { fetchMovie } from "../../api/movie-search-api";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { useLocation } from "react-router-dom";




const MovieDetails = () => { 

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();  
    
    const locationObj = useRef(location.state ?? '/');   
    
    
    useEffect(() => {
        const getMovie = async () => {
            setIsLoading(true);
            setError(false);
           try {
               const data = await fetchMovie(id);               
               setMovie(data);
           } catch (error) {
                console.log("error:", error);
               setError(true);               
            }
            finally {
                setIsLoading(false);
            }
        }
        id && getMovie();                  
       
    }, [id]);
    
    return (
        <div>
            <Link to={locationObj.current}>Back</Link>
            <br/>
            {isLoading && <Loading />}
            {error && <Error />}
            {movie && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie poster: ${movie.original_title}`} />
                    
                    <div>
                        <h1>{movie.original_title}</h1>
                        <div>
                            <h3>User score: </h3>
                            <p>{movie.popularity}</p>
                        </div>                
                        <div>
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                        </div>
                        <div>
                            <h2>Genres</h2>
                            <ul>
                                {movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>) }
                            </ul>
                        </div>
                    </div>
              
                
                </>
                
            )}
            <Link to={'cast'} state={location.state}>Cast</Link>
            <Link to={'reviews'} state={location.state}>Reviews</Link>
            <br />
            <Outlet />
        </div>          
        
    )
}
 
export default MovieDetails