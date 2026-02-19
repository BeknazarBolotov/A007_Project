import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top py-3">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand" to="/">Dimed</NavLink>

        {/* Hamburger */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/">{t('navbar.home')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/about">{t('navbar.about')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/services">{t('navbar.services')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/contacts">{t('navbar.contacts')}</NavLink>
            </li>

            {/* Language dropdown */}
            <li className="nav-item dropdown ms-lg-4 mt-2 mt-lg-0">
              <a className="nav-link dropdown-toggle lang-dropdown" href="#" role="button" data-bs-toggle="dropdown">
                {i18n.language.toUpperCase()}
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li>
                  <button className="dropdown-item" onClick={() => changeLanguage('ru')}>RU</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => changeLanguage('ky')}>KY</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => changeLanguage('en')}>EN</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
