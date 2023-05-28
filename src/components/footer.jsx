import "../Styles/footer.css";
import logoFooter from '../Img/logo.png'
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
          <p>CrossFit</p>
        </div>
        <div className="box">
          <h2>HORARIOS</h2>
          <p>Lunes a Viernes: 7 a 23 hs</p>
          <p>Sábado: 9 a 18 hs</p>
         
        </div>
      </div>
      <div className="grupo-2">
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="" className="fa fa-facebook"></a>
            <a href="" className="fa fa-instagram"></a>
            <a href="" className="fa fa-twitter"></a>
            <a href="" className="fa fa-linkedin"></a>
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
