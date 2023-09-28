// import MovieDetails from "pages/MovieDetails/MovieDetails"
import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { searchMovies } from 'components/GetApi';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const movieId = searchParams.get('movie');
  const location = useLocation()


  //   const updateQueryString = evt => {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (movieId) {
          const resp = await searchMovies(movieId);

          setMovie(resp.data.results);
        }
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
      <Formik
        initialValues={{ search: '' }}
        onSubmit={values => {
          setSearchParams(values.search ? { movie: values.search } : {});
        }}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="search"
              placeholder="Search for movies..."
            />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
      <ul>
        {movie.map(item => (
          <Link key={item.id} to={`/movies/${item.id}`} state={{from : location}}>
            
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
