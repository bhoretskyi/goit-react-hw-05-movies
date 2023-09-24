import { Route, Routes } from 'react-router-dom';
// import { getTrending } from "./GetApi";

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFpund';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Layout from './Layout/Layout';
import Credits from './Credits/Credits';
import Rewiews from './Rewiews/Rewiews';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}> 
        <Route path='credits' element ={<Credits/>}/>
        <Route path ='rewiews' element={<Rewiews/>} />
        </Route>
      </Route>
    </Routes>
  );
};
