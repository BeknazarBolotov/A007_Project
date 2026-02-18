// Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white" to="/">
          Dimed
        </NavLink>

        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">О компании</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Услуги</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
