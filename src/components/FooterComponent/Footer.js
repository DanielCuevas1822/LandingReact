import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-12 col-md-6 footer__copy">
          <p>Nombre del grupo &copy; 2021</p>
        </div>
        <div className="col-12 col-md-6 footer__nav">
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
  );
};
export default Footer;
