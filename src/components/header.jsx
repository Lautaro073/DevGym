import '../Styles/Header.css'
import foto1 from '../Img/foto1.png'
import foto2 from '../Img/foto2.png'
import foto3 from '../Img/foto3.png'

const Header = () => {
  return (
    <header className='header'>
     
       
      
       <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='frase'>
              <img alt='foto1' src={foto1}/>
            </div>
          </div>
          <div className="carousel-item">
            <div className='frase'>
            <img alt='foto2' src={foto2}/>
            </div>
          </div>
          <div className="carousel-item">
            <div className='frase'>
            <img alt='foto3' src={foto3}/>
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