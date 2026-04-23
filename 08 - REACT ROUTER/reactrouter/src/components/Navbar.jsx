import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/about"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default Navbar;
