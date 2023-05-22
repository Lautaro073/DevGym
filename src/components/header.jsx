import '../Styles/header.css'
import Nav from './nav.jsx'

const Header = () => {
  return (
    <header className='header'>
       <Nav>
        
       </Nav>
       <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='frase'>
               TRANSFORMA TU CUERPO, TRANSFORMA TU MENTE, TRANSFORMA TU VIDA
            </div>
          </div>
          <div class="carousel-item">
            <div className='frase'>
              CUIDA TU CUERPO, ES EL ÚNICO LUGAR QUE TIENES PARA VIVIR
            </div>
          </div>
          <div class="carousel-item">
            <div className='frase'>
              TU ÚNICO LÍMITE ERES TÚ
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
       </div>
    </header>
  )
}

export default Header