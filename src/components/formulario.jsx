import '../Styles/FormContacto.css'
import Swal from 'sweetalert2';
import React, { useState } from 'react';
const Form_contacto = () => {
  // Define varios estados diferentes utilizando el hook useState
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // Manejador de eventos que se llama cuando se envía el formulario
  const handleEnviar = (event) => {
    event.preventDefault();
    // Muestra un mensaje de éxito utilizando la biblioteca SweetAlert2
    Swal.fire({
      title: `¡Hola ${nombre}!`,
      text: "Tu mensaje se envió con éxito",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    // Limpia los campos de entrada después de enviar el formulario
    setNombre("");
    setEmail("");
    setTelefono("");
    setMensaje("");
  };

  // Manejador de eventos que se llama cuando uno o más campos del formulario cambian
  const handleInputChange = (event) => {
    const { input, value } = event.target;

    // Objeto que mapea los nombres de los campos a las funciones setter correspondientes
    const stateSetterMap = {
      nombre: setNombre,
      email: setEmail,
      telefono: setTelefono,
      mensaje: setMensaje,
    };

    // Si el nombre del campo coincide con una clave en el objeto stateSetterMap, entonces llama a la función setter correspondiente con el valor actual del campo
    const setState = stateSetterMap[input];
    if (setState) {
      setState(value);
    }

    // Determina si el formulario está completo basándose en si todos los campos obligatorios tienen un valor no vacío
    setIsComplete(
      nombre !== "" && email !== "" && telefono !== "" && mensaje !== ""
    );
  };
    return (
        <>
    
     <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
        <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Contáctanos</h3>
       
        <form onSubmit={handleEnviar} id='Contacto'>
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