import axios from 'axios';

const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2ZhMDI0YmQzZTAyZTBjZTQ1Y2Q0N2IxNzczMDFmYSIsInN1YiI6IjY1MGQ3NDhiMmM2YjdiMDBmZTQ2OWM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGsGt9I-ds4n-BYGNrCfXeCnG7RZ7BkNEfPbyIudTDA',
    },
  };
export async function getTrending() {
  

  const resp = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  return resp;
}

export async function searchMovies(query) {
  

    const resp = await axios.get(
        `https://api.themoviedb.org/3/search/${query}?include_adult=false&language=en-US&page=1`,
      options
    );
    return resp;
  }

  export async function getMovieDetails(movieId) {
  

    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    return resp;
  }

  export async function getMovieCredits(movieId) {
  

    const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    return resp;
  }

  export async function getMovieRewiews(movieId) {
  

    const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    return resp;
  }


 
