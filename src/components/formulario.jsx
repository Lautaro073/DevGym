import '../Styles/FormContacto.css'
const Form_contacto=()=> {
    return (
        <>
    
     <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
        <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Contactanos</h3>
       
          <form  method="post">
            <div className="row text-center contact-wls-detail">
              <div className="col-md-4 form-group form-contacto">
                <input type="text" className="form-control" placeholder="Nombre" required=""/>
              </div>
              <div className="col-md-4 form-group form-contacto">
                <input type="email" className="form-control" placeholder=" Email" required=""/>
              </div>
              <div className="col-md-4 form-group form-contacto">
                <input type="text" name="Phone" className="form-control" placeholder="Telefono " required=""/>
              </div>
            </div>
            <div className="form-group form-contacto">
              <textarea className="form-control" rows="3" placeholder="Mensaje" required=""></textarea>
            </div>
            <button type="submit" className="btn btn-enviar">Enviar</button>
          </form>
        </div>
     
    
          </>
    )
        
    
    
}

export default Form_contacto