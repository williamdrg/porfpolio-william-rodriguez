import { Slide } from 'react-awesome-reveal';
import '../styles/aboutMe.css'

const AboutMe = () => {
   
  return (
    <div id='about'>
      <Slide>
        <span className="green about_title">Sobre mi</span>
      </Slide>
        <div className='about_container'>
          <Slide direction="left">
            <div className='about_description'>
              <div className='img_about'>
                <img src="../../../public/programador.jpg" alt="imagen de programador" />
              </div>
              <p>
              ¡Hola! Soy un Desarrollador Web Full Stack apasionado y autodidacta con una 
              sólida formación en informática adquirida en la Universidad de Magdalena y 
              refinada durante mis años como docente. Esta experiencia en la enseñanza me 
              ha permitido cultivar habilidades de comunicación efectivas y la capacidad 
              para descomponer y explicar conceptos complejos de manera sencilla, habilidades 
              que resultan esenciales en programación.
              </p> <br />
              <p>
              Decidí expandir mis conocimientos de programación y perfeccionar mis habilidades 
              inscribiéndome en un bootcamp en Academlo, donde me formé como Desarrollador Web 
              Full Stack. Aquí adquirí las herramientas y técnicas necesarias para diseñar 
              soluciones estéticas y funcionales que mejoran la vida de los usuarios.
              </p> <br />
              <p>
              Fuera del mundo del código, disfruto de la naturaleza haciendo ciclomontañismo, 
              viendo películas y paseando a mi Husky, Bruno. Si buscas un desarrollador que 
              valora el equilibrio entre la vida personal y profesional, y que está listo 
              para enfrentar cualquier desafío de programación, ¡aquí estoy!
              </p> <br />
            </div>
          </Slide>
          <Slide direction="up">
            <div className="cards_about">
              <h2 className='skill_text'>Habilidades</h2>
              <div className="card_items color">
                <p className="tip">Responsable</p>
                <div className='card1'></div>
              </div>
              <div className="card_items color">
                <p className="tip">Creativo</p>
                <div className='card1'></div>
              </div>
              <div className="card_items color">
                <p className="tip">Autodidacta</p>
                <div className='card1'></div>
              </div>
              <div className="card_items color">
                <p className="tip">Comunicación afectiva</p>
                <div className='card1'></div>
              </div>
              <div className="card_items color">
                <p className="tip">Trabajo en equipo</p>
                <div className='card1'></div>
              </div>
            </div>
          </Slide>
      </div>
  </div>
  )
}

export default AboutMe