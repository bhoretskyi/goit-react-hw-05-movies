import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
