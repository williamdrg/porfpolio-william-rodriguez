import React from "react";
import "../../styles/header.css";
import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaDownload } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <div className="container_pro" id="home">
      <Slide direction="left">
        <div className="texts">
          <h4>
            Hola <span className="green">soy</span>
          </h4>
          <h1 className="green">WIllliam Rodríguez</h1>
          <h3>Desarrollador Web Full Stack</h3>
          <p>
            Tengo experiencia en tecnologías web como JavaScript, HTML5, 
            CSS, React, Git, GitHub, Node.js, Express.js, Sequelize, 
            PostgreSQL, Multer y Swagger. Me apasiona desarrollar soluciones 
            de software escalables y de alta calidad que cumplan con las 
            necesidades de los usuarios. Disfruto trabajando en proyectos 
            desafiantes y sigo aprendiendo nuevas tecnologías para mejorar 
            mis habilidades.
          </p>
          <button>
            <a href="https://drive.google.com/file/d/1DZpNtws5vxpKwghjiSagtoeXDVqIoTxz/view?usp=sharing" target="_blank" style={{ color: 'white' }}>
              Descargar cv <FaDownload />
            </a>
          </button>
          <div className="social">
            <div className="social-icons">
              <span>
                <a href="https://github.com/williamdrg" target="_blank">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://api.whatsapp.com/send?phone=573023559563" target="_blank">
                  <BsWhatsapp />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/william-rodr%C3%ADguez-garc%C3%ADa-20b971115/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="right">
        <div className="profile">
          <img
            src="../../public/will.png"
            alt="profile"
          />
        </div>
      </Slide>
    </div>
  );
};

export default ProfComponent;
