import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Clases from "../Pages/Clases.jsx";
import Instalaciones from "../Pages/Instalaciones.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Form_contacto from "../Pages/Formulario.jsx";
import Coach from "../Pages/Coach.jsx";
import Inicio from '../Pages/Inicio.jsx'
import PageNotFound from "../Pages/PageNotFound.jsx";
import { BrowserRouter as Router, 
  Routes as Rutas,
  Route  as Ruta }
from "react-router-dom";
function App() {
  return (
    <Router>
    <Header/>
    <Rutas>
    <Ruta path="/" element={<Inicio />}></Ruta>
    <Ruta path="/Clases" element={<Clases />}></Ruta>
    <Ruta path="/Instalaciones" element={<Instalaciones />}></Ruta>
    <Ruta path="/Coach" element={<Coach />}></Ruta>
    <Ruta path="/Contacto" element={<Form_contacto />}></Ruta> 
    <Ruta path="*" element={<PageNotFound/>}></Ruta>
    </Rutas>
    <Footer/>
    </Router>
  );
}

export default App;
