import { Route, Routes, Link } from 'react-router-dom';
// import { getTrending } from "./GetApi";
import Header from './Header/Header';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFpund';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
