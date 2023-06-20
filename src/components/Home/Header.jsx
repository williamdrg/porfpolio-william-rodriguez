import React, { useState } from "react";
import "../../styles/header.css";

const Header = () => {
  const [bar, setBar] = useState(false);

  const handleLinkClick = () => {
    setBar(false);
  };

  return (
    <div className={`container_head ${bar ? "bar-active" : ""}`}>
      <div className="logo">
        <span className="green">
        </span>
        {/* <h1>Portfolio</h1> */}
      </div>
      <div className={`nav ${bar ? "nav-active" : ""}`}>
        <span>
          <a href="#home" onClick={handleLinkClick}>
            Inicio
          </a>
        </span>
        <span>
          <a href="#service" onClick={handleLinkClick}>
            Servicios
          </a>
        </span>
        <span>
          <a href="#projects" onClick={handleLinkClick}>
            Proyectos
          </a>
        </span>
        <span>
          <a href="#about" onClick={handleLinkClick}>
            Sobre mí
          </a>
        </span>
        <span>
          <a href="#footer" onClick={handleLinkClick}>
            Contacto
          </a>
        </span>
      </div>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
