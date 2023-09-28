import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNav, StyledLink } from './StyledLayout';
const Layout = () => {
  return (
    <div>
      <header>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
