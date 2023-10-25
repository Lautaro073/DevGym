import '../Styles/FormContacto.css'

import React, { useState } from 'react';
const Form_contacto = () => {
  // Define varios estados diferentes utilizando el hook useState
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  
  const [mensaje, setMensaje] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const generarLinkWhatsApp = () => {
    const numero = "+5493865601579"; 
    const base = "https://api.whatsapp.com/send?phone=";
    // Estructura el mensaje basado en la información proporcionada en el formulario
    const mensajeForm = `Hola! Mi nombre es ${nombre}.
    Mi correo electrónico es ${email}.
    Mensaje: ${mensaje}`;
    return `${base}${numero}&text=${encodeURIComponent(mensajeForm)}`;
  };
  // Manejador de eventos que se llama cuando se envía el formulario
  const handleEnviar = (event) => {
    event.preventDefault();
    // Redirige al usuario a WhatsApp
    window.open(generarLinkWhatsApp(), '_blank');
    // Limpia los campos de entrada después de enviar el formulario
    setNombre("");
    setEmail("");
    
    setMensaje("");
  };
  

  // Manejador de eventos que se llama cuando uno o más campos del formulario cambian
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Objeto que mapea los nombres de los campos a las funciones setter correspondientes
    const stateSetterMap = {
      nombre: setNombre,
      email: setEmail,
      
      mensaje: setMensaje,
    };

    // Si el nombre del campo coincide con una clave en el objeto stateSetterMap, entonces llama a la función setter correspondiente con el valor actual del campo
    const setState = stateSetterMap[name];
    if (setState) {
      setState(value);
    }

    // Determina si el formulario está completo basándose en si todos los campos obligatorios tienen un valor no vacío
    setIsComplete(
      nombre !== "" && email !== ""  && mensaje !== ""
    );
  };
  
    return (
        <>
    
     <div className="container py-lg-5 py-md-5 py-sm-4 py-3" id='Contacto'>
        <h3 className="title tit-form text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">CONTÁCTANOS</h3>
       
        <form onSubmit={handleEnviar}>
  <div className="row text-center contact-wls-detail">
    <div className="col-md-6 form-group form-contacto"> {/* Cambiado de col-md-4 a col-md-6 */}
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Nombre"
        required={true}
      />
    </div>
    <div className="col-md-6 form-group form-contacto"> {/* Cambiado de col-md-4 a col-md-6 */}
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Correo electrónico"
        required={true}
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
      rows={3}
      placeholder="Mensaje"
      required={true}
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