import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p>
            <Link to="/">Inicio</Link>
          </p>
          <p>
            <a href="#">Accesorios</a>
          </p>
          <p>
            <a href="#">Equipamento</a>
          </p>
          <p>
            <a href="#">Suplementos</a>
          </p>
          <p>
            <Link to="/detail">detalle</Link>
          </p>
        </div>
        <div className="navbar-cart">
          <BsFillCartFill color="#e31515" size={24} />
          <span className="navbar-cart__cant">3</span>
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
                <a href="#">Inicio</a>
              </p>
              <p>
                <a href="#">Accesorios</a>
              </p>
              <p>
                <a href="#">Equipamento</a>
              </p>
              <p>
                <a href="#">Suplementos</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
