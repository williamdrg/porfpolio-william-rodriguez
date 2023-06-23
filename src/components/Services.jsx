import "../styles/services.css"
import { IoIosTv } from "react-icons/io";
import { SiAcclaim } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Card from "./CardServices";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <div className="container_serv" id="service">
      <Slide direction="down">
        <h4>
          Servicios <span className="green">que brindo</span>
        </h4>
      </Slide>
      <div className="cards">  
        <Slide direction="left">
          <Card
            Icon={IoIosTv}
            title={"Diseño Web"}
            disc={`Puedo llevar tu presencia en línea al siguiente nivel. 
            Convierto tus ideas en sitios web personalizados que no solo 
            se ven impresionantes, sino que también brindan una experiencia 
            excepcional a tus usuarios. Trabajemos juntos para crear un sitio 
            web que sea fiel a tu visión y que haga que tu marca destaque en 
            el vasto mundo digital.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiAcclaim}
            title={"Optimización Ninja"}
            disc={`Puedo acelerar tu sitio web y dejar a tu competencia 
            mordiendo el polvo. Utilizando técnicas avanzadas de optimización 
            y mejorando el rendimiento del código, haré que tu sitio web vuele 
            como un cohete. Permíteme ahorrarle tiempo de carga a tus visitantes 
            y ofrecer una experiencia tan fluida que no podrán resistirse a quedarse.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={VscCode}
            title={"Desarrollo Personalizado"}
            disc={`Desde la interfaz de usuario cautivadora hasta la implementación 
            inteligente de funciones complejas, trabajaré incansablemente para brindarte 
            una solución que haga brillar tu negocio. Permíteme transformar tus sueños 
            en código y sorprender al mundo con una experiencia en línea excepcional.`}
          />
        </Slide>
        </div>
    </div>
  );
};

export default Services;
