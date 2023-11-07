import "../Styles/profes.css";
import t1 from "../Img/t1.jpg";
import Profes from "../components/profes.jsx";
function Coach() {
  return (
    <div className="coaches  py-lg-4 py-md-3 py-sm-3 py-3" id="coach">
      <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 className="coach-title text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">
          PROFESOR
        </h3>
        <div className="row text-center justify-content-center grupo">

          <Profes
            icon={t1}
            nombre="Exequiel Pintos"
            enseña="Entrenamiento Perzonalizado"
            descripcion="Planificación de rutinas - Aumento de masa muscular - Descenso de peso - 
            Mejoras en niveles de fuerza y potencia - Antropometría / Bioimpedancia - Asesoria"
          />
         
        </div>
      </div>
    </div>
  );
}
export default Coach;
