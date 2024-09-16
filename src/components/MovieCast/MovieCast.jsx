

import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import { fetchMovieCast } from "../../api/movie-search-api";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import styles from "./MovieCast.module.css"


const MovieCast = () => { 

    const { id } = useParams();
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
     
    
    
    useEffect(() => {
        const getCast = async () => {
            setIsLoading(true);
            setError(false);
           try {
               const data = await fetchMovieCast(id);               
               setCast(data);
           } catch (error) {
                console.log("error:", error);
               setError(true);               
            }
            finally {
                setIsLoading(false);
            }
        }
        id && getCast();                  
       
    }, [id]);
    
    return (
        <div>
            
            {isLoading && <Loading />}
            {error && <Error />}
            {cast && (
                <>
                    <ul className={styles.castList}>                      
                           
                        {cast.map((cast) => 
                            <ul key={cast.id}>
                                <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} />
                                <li>{cast.name}</li>
                                <li>Character: {cast.character}</li>
                                </ul>
                        )}                        
                       
                    </ul>          
                
                </>
                
            )}
           
        </div>          
        
    )
}
 
export default MovieCast