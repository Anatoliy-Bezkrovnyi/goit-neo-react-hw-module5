import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import { fetchMovieReviews } from "../../api/movie-search-api";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import styles from "./MovieReview.module.css"


const MovieReview = () => { 

    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
     
    
    
    useEffect(() => {
        const getReviews = async () => {
            setIsLoading(true);
            setError(false);
           try {
               const data = await fetchMovieReviews(id);               
               setReviews(data);              

           } catch (error) {
                console.log("error:", error);
               setError(true);               
            }
            finally {
                setIsLoading(false);
            }
        }
        id && getReviews();
       
    }, [id]);
    
    return (
        <div>
            
            {isLoading && <Loading />}
            {error && <Error />}
            {reviews.length > 0 ? (
                <>
                    <ul className={styles.listReviews}>                      
                           
                        {reviews.map((review) => 
                            <li key={review.id} className={styles.review}>                                
                                <p className={styles.reviewHeader}>Author: {review.author}</p>
                                <p>{review.content}</p>
                            </li>
                        )}                        
                       
                    </ul>          
                
                </>
                
            ) : <p>We do not have any reviews for this movie</p>
            }
           
        </div>          
        
    )
}
 
export default MovieReview