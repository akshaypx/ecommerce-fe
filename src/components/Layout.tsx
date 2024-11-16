import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Layout</header>
      {/* THis is where child routes appear */}
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
