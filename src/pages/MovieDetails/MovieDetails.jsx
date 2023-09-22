import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/GetApi';

const MovieDetails = () => {
  const { movieId } = useParams();


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
    </div>
  );
};
export default MovieDetails;
