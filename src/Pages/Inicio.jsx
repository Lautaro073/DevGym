
import Clases from "../Pages/Clases.jsx";
import Instalaciones from "../Pages/Instalaciones.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Form_contacto from "../Pages/Formulario.jsx";
import Coach from "../Pages/Coach.jsx";


function Inicio() {
  return (
    <>
    <Clases/>
    <Instalaciones/>
    <Coach/>
    <Form_contacto/>

    </>
  );
}

export default Inicio;