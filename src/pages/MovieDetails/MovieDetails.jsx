import { useParams,Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'components/GetApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.from ?? '/home');
  

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const resp = await getMovieDetails(movieId);

        setData(resp.data);
      } catch (error) {
        console.error('Error:', error);
      } 
      finally{
        setIsLoading(false)
      }
    };


    fetchData();
  }, [movieId]);
  
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ):(
        <div>
        <Link to={backLinkLocationRef.current}>back</Link>

          <h1>{data.title}</h1>
          <h2>User score: {Math.round(data.vote_average * 10)}%</h2>
          {data.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt={data.title}
              width="300"
            />
          )}
          <p>{data.overview}</p>
        </div>
      )}
      <div>
        
        <h3>Additional information</h3>
       <Link to="credits">Cast</Link>
        <Link to="rewiews">Rewiews</Link>
        <Outlet/>
        </div>
        
    </div>
  );
};
export default MovieDetails;
