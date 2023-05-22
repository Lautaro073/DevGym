import '../Styles/principal.css'
import pilates from '../Img/pilates.jpg'
import musculacion from '../Img/musculacion.jpg'
import crossfit from '../Img/crossfit.jpeg'

function Principal(){
    return(

        <section className='section'>
            <img alt='pilates' src={pilates}/>
            <img alt='musculacion' src={musculacion}/>
            <img alt='crossfit' src={crossfit}/>
        </section>
    );
}
export default Principal;