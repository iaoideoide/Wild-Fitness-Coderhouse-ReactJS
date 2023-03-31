import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWiget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="navbar-links_container">
          <p>
            <Link to="/">Inicio</Link>
          </p>
          <p>
            <Link to="/category/accesorios">Accesorios</Link>
          </p>
          <p>
            <Link to="/category/equipamentos">Equipamento</Link>
          </p>
          <p>
            <Link to="/category/suplementos">Suplementos</Link>
          </p>
        </div>
        <div className="navbar-cart">
          <CartWidget />
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <Link to="/">Inicio</Link>
              </p>
              <p>
                <Link to="/category/accesorio">Accesorios</Link>
              </p>
              <p>
                <Link to="/category/equipamento">Equipamento</Link>
              </p>
              <p>
                <Link to="/category/suplemento">Suplementos</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
