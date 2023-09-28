import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'components/GetApi';
import { StyledLink, StyledDiv } from './StyledMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/home');

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await getMovieDetails(movieId);

        setData(resp.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <StyledLink to={backLinkLocationRef.current}>back</StyledLink>

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
      <StyledDiv>
        <h3>Additional information</h3>
        <StyledLink to="credits">Cast</StyledLink>
        <StyledLink to="rewiews">Rewiews</StyledLink>
        <Outlet />
      </StyledDiv>
    </div>
  );
};
export default MovieDetails;
