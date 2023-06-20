import { Zoom } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import "../styles/projects.css"

const Projects = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 426px)' })
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const projects = [
    {img: "../../../public/APIecommerce.png", disc: `¡Bienvenido a nuestra documentación de API para comercio 
    electrónico! Descubre el poder de nuestra API para impulsar tu negocio en línea.`, demo: "https://ecomerce-api-8u64.onrender.com/docs/"},
    {img: "../../../public/galleta.png", disc: `¿Quieres probar tu suerte? 
      Descubre el mensaje de tu galleta de la fortuna en nuestra página. 
      La dulzura de la vida en cada bocado. Bienvenidos.`, demo: "https://galletasdelafortuna.netlify.app/"},
    {img: "../../../public/clima.png", disc: `Aunque el clima cambie constantemente, nuestra página del clima 
      siempre te brindará una cálida bienvenida. Descubre las condiciones actuales y prepárate para lo que el 
      día tenga preparado. ¡Bienvenidos!`, demo: "https://climateapplication1.netlify.app/"},
    {img: "../../../public/rick.png", disc: `¡Explora el universo de Rick and Morty en nuestra wiki! Descubre 
      información detallada sobre los personajes, episodios, teorías y mucho más.`, demo: "https://rickandmortywilliam.netlify.app/"},
    {img: "../../../public/product.png", disc: `¡Descubre una forma más fácil y eficiente de gestionar tus productos con nuestra aplicación de CRUD! 
      Agrega, actualiza, elimina y visualiza tus productos de manera rápida y sencilla.`, demo: "https://productswithcrud.netlify.app/"},
    {img: "../../../public/pokemon.png", disc: `¡Sumérgete en el apasionante mundo de los Pokémon con nuestra increíble Pokédex en línea! 
      Descubre información detallada sobre cada especie, sus habilidades, características y mucho más. `, demo: "https://williamrodriguez-pokedex.netlify.app/"},
    {img: "../../../public/ecomerce.png", disc: `¡Bienvenido a nuestra tienda en línea! Descubre una experiencia de compra única en nuestro sitio web de comercio 
      electrónico. Explora nuestra amplia selección de productos de alta calidad y encuentra 
      todo lo que necesitas en un solo lugar.`, demo: "https://williamrodriguez-e-comerce.netlify.app/"},
    {img: "https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg", disc: "Estoy preparando algo asombroso y emocionante para ti." },
    {img: "https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg", disc: "Estoy preparando algo asombroso y emocionante para ti." },
    {img: "https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg", disc: "Estoy preparando algo asombroso y emocionante para ti." }
  ]

  useEffect(() => {
    if (isSmallScreen && !isHovering) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isSmallScreen, isHovering, projects.length]);

  return (
    <div className='project_pjs' id='projects'>
        <Zoom>
            <h1>Mis <span className="green">Proyectos</span></h1>
        </Zoom>
        <div className="slide">
          <div className="content-all">
            <div className="content-carrousel" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
              {projects.map((project, index) =>
                <figure key={index} className='project_count' style={{ display: isSmallScreen && index !== currentImageIndex ? 'none' : 'block' }}>
                  <img src={project.img} alt={`imagen${index + 1}`} />
                  <div className="disc">
                    <p className='discp'>{project.disc}<a href={project.demo} target='_blank'>Demo</a></p>
                  </div>
                </figure>
              )}

            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;
