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
        <div class="box">
          <h2>CLASES</h2>
          <p>CrossFit</p>
          <p>Musculación</p>
          <p>Pilates</p>
        </div>
        <div class="box">
          <h2>HORARIOS</h2>
          <p>Lunes a Viernes: 7 a 23 hs</p>
          <p>Sábado: 9 a 18 hs</p>
         
        </div>
      </div>
      <div class="grupo-2">
        <div class="box">
          <h2>SIGUENOS</h2>
          <div class="red-social">
            <a href="" class="fa fa-facebook"></a>
            <a href="" class="fa fa-instagram"></a>
            <a href="" class="fa fa-twitter"></a>
            <a href="" class="fa fa-linkedin"></a>
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
