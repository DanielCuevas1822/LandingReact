import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="row">
          <div className="col-12 col-md-6 logo">
            <Link to="/">Landing Page</Link>
          </div>
          <div className="col-12 col-md-6 custom-nav">
            <nav>
              <ul>
                <li>
                  <Link to="/#equipo">Equipo</Link>
                </li>
                <li>
                  <Link to="/#somos">Quienes somos</Link>
                </li>
                <li>
                  <Link to="/contactus/#contact">Contacto</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
