import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import NotFound from 'pages/NotFound/NotFpund';
import Layout from './Layout/Layout';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Credits = lazy(() => import('./Credits/Credits'));
const Rewiews = lazy(() => import('./Rewiews/Rewiews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Credits />} />
          <Route path="rewiews" element={<Rewiews />} />
        </Route>
      </Route>
    </Routes>
  );
};
