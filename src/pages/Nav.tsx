import { Outlet, Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <ThemeToggle />
        <Link to="/settings">Settings</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
