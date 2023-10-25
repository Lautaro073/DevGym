import "../Styles/Footer.css";
import logoFooter from '../Img/logo3.png'
const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
        <figure>
          <img src={logoFooter}></img>
        </figure>
        </div>
        <div className="box">
          <h2>CLASES</h2>
          <p>Musculación</p>
          <p>Funcional</p>
        </div>
        <div className="box">
          <h2>HORARIOS</h2>
          <p>Estamos aquí para ayudarte,</p>
          <p>contáctanos cuando quieras!</p>
         
        </div>
      </div>
      <div className="grupo-2">
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
          <a
                  href="https://www.instagram.com/exe_pintos?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fa fa-instagram"
                ></a>
          </div>
        </div>
        <small>
          &copy; 2023 <b>DevGYM</b> - Todos los Derechos Reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;