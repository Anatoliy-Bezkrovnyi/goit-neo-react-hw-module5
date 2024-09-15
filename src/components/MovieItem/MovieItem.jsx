import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const MovieItem = ({ title, id }) => { 

    const location = useLocation();

    return (

        <Link to={`/movies/${id}`} state ={ location }>{title}</Link>
          
        
    );
}
 
export default MovieItem