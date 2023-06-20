import "../styles/footer.css"
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import emailjs from 'emailjs-com';
import { useRef, useState } from "react";
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_APP_EMAILJS_USER_ID;


const Footer = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target  , userId)
    .then((result) => {
        console.log(result.text);
        e.target.reset();
        setMessage('Mensaje enviado con éxito!');
    }, (error) => {
        console.log(error.text);
        setMessage('Hubo un error al enviar el mensaje.');
    });
  };

  return (
    <div className="container_foot" id="footer">
      <div className="profile">
        <Slide direction="left" delay={1}>
          <h1 className="contact">Contacto</h1>
        </Slide>
        <div className="links">
          <Slide direction="left">
            <h1>Póngase en contacto conmigo:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+57 3023559563">+57 302 3559563</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">davidwdrg@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Redes sociales</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/williamdrg" target="_blank">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/william-rodr%C3%ADguez-garc%C3%ADa-20b971115/" target="_blank">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://api.whatsapp.com/send?phone=573023559563" target="_blank">
                <BsWhatsapp />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <div className="arrow-up" onClick={scrollUp}>
            <AiOutlineArrowUp />
          </div>
        </Fade>
      </div>
      <div className="form">
        <Slide direction="right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input type="text" name="user_name" placeholder="Nombre..." />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input type="email" name="user_email" placeholder="Email..." />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea name="message" cols="30" rows="10" placeholder="Mensaje..."></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
          </Slide>
        </div>
      </div>
    );
  };
  
  export default Footer;