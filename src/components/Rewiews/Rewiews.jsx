import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieRewiews } from "components/GetApi";
const Rewiews = () => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true)
          const resp = await getMovieRewiews(movieId);

          setData(resp.data.results);
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
    ) : data.length > 0 ? (
      <ul>
        {data.map((review, index) => (
          <li key={index}><h3>{review.author}</h3> <p>{review.content}</p></li>
        ))}
      </ul>
    ) : 
    (<h2>There is no rewiews</h2>)}
  </div>
        
    )
}


export default Rewiews