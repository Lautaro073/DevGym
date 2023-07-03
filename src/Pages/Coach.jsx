import "../Styles/Profes.css";
import t1 from "../Img/t1.jpg";
import t2 from "../Img/t2.jpg";
import t3 from "../Img/t3.jpg";
import Profes from "../components/Profes.jsx";
function Coach() {
  return (
    <div className="coaches  py-lg-4 py-md-3 py-sm-3 py-3" id="coach">
      <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 className="coach-title text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">
          COACHES
        </h3>
        <div className="row text-center justify-content-center grupo">

          <Profes
            icon={t1}
            nombre="Matías Fernández"
            enseña="Musculación"
            descripcion="Entrenamiento perzonalizado - Especialista en fuerza y acondicionamiento físico -
         Alto rendimiento"
          />
          <Profes
            icon={t2}
            nombre="María Leiva"
            enseña="Funcional"
            descripcion="Fortalecimiento post lesión - Fuerza - Específico para deportistas - 
        Control corporal/bioimpedancia"
          />
          <Profes
            icon={t3}
            nombre="María Gomez"
            enseña="CrossFit"
            descripcion="Planificación de rutinas - Aumento de masa muscular - 
        Descenso de peso - Antropometría/bioimpedancia"
          />
        </div>
      </div>
    </div>
  );
}
export default Coach;
