import "../Styles/Profes.css";
import SlideInTop from "./SlideInTop";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

function Profes(proops) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <LazyLoad once>
          <SlideInTop>
            <div className="coaches-group">
              <img src={proops.icon} />
              <h4 className="mt-3 mb-2">{proops.nombre}</h4>
              <span className="coach-enseña">{proops.enseña}</span>
              <p className="mt-3">{proops.descripcion}</p>
              <div className="icons mt-lg-4 mt-md-3 mt-3">
                <a
                  href="https://www.instagram.com/exe_pintos?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fa fa-instagram"
                ></a>
                <Link to="/contacto">
                  <a className="fa fa-whatsapp"></a>
                </Link>
              </div>
            </div>
          </SlideInTop>
        </LazyLoad>
      </div>
    </>
  );
}
export default Profes;
