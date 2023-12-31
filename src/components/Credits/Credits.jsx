import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/GetApi';

const Credits = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await getMovieCredits(movieId);
        setData(resp.data.cast);
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
      ) : data.length > 0 ? (
        <ul>
          {data.map((credit, index) => (
            <li key={index}>
              <h3>{credit.name}</h3>
              <img
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
                    : '#'
                }
                alt={credit.character}
                width="300"
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>There is no cast information</h2>
      )}
    </div>
  );
};
export default Credits;
