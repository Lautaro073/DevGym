import '../Styles/FormContacto.css'
import Swal from 'sweetalert2';
import React, { useState } from 'react';
const Form_contacto=()=> {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleEnviar = (event) => {
    event.preventDefault();
    Swal.fire({
      title: `¡Hola ${nombre}!`,
      text: 'Tu mensaje se envio con éxito',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "nombre":
        setNombre(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telefono":
        setTelefono(value);
        break;
      case "mensaje":
        setMensaje(value);
        break;
      default:
        break;
    }
    setIsComplete(nombre !== "" && email !== "" && telefono !== "" && mensaje !== "");
  };
    return (
        <>
    
     <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
        <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Contáctanos</h3>
       
        <form onSubmit={handleEnviar}>
      <div className="row text-center contact-wls-detail">
        <div className="col-md-4 form-group form-contacto">
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="col-md-4 form-group form-contacto">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div className="col-md-4 form-group form-contacto">
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Teléfono"
            required
          />
        </div>
      </div>
      <div className="form-group form-contacto">
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={handleInputChange}
          className="form-control"
          rows="3"
          placeholder="Mensaje"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-enviar" disabled={!isComplete}>
        Enviar
      </button>
    </form>
        </div>
     
    
          </>
    )
        
    
    
}

export default Form_contacto