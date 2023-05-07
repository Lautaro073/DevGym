import '../Styles/principal.css'
import pilates from '../Img/pilates.jpg'
import musculacion from '../Img/musculacion.jpg'
import crossfit from '../Img/crossfit.jpeg'

function Principal(){
    return(
        <section>
            <img src={pilates}/>
            <img scr={musculacion}/>
            <img scr={crossfit}/>
        </section>
    )
}
export default Principal;