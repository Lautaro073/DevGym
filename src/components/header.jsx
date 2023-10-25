import '../Styles/Header.css'


const Header = () => {
  return (
    <header className='header'>
     
       
      
       <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='frase'>
               TRANSFORMA TU CUERPO, TRANSFORMA TU MENTE, TRANSFORMA TU VIDA
            </div>
          </div>
          <div className="carousel-item">
            <div className='frase'>
              CUIDA TU CUERPO, ES EL ÚNICO LUGAR QUE TIENES PARA VIVIR
            </div>
          </div>
          <div className="carousel-item">
            <div className='frase'>
              NO CONOCES TUS LÍMITES, HASTA QUE LOS SUPERAS
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       </div>

    </header>
  )
}
export default Header