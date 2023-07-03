import '../Styles/principal.css'
import Funcional from '../Img/funcional.jpg'
import Musculacion from '../Img/musculacion.jpg'
import Crossfit from '../Img/crossfit.jpeg'
import SlideInTop from '../components/SlideInTop'
function Principal(){
    return(

        <div className='fondo'>
            <h1 className='tit' id='Clases'>CLASES</h1>
            <SlideInTop><section className='section'>
                <div className='card'>
                    <img alt='funcional' src={Funcional}/>
                    <div className='contenido'>
                        <h2>Funcional</h2>
                        <p>Trabaja de forma global músculos y articulaciones realizando ejercicios que mejoran la movilidad corporal,
                         la agilidad y el equilibrio, desarrolla la salud cardiovascular, corrige la postura y fortalece la masa muscular.</p>
                    </div>
                </div>
                <div className='card'>
                    <img alt='musculacion' src={Musculacion}/>
                    <div className='contenido'>
                        <h2>Musculación</h2>
                        <p>Tonifica y desarrolla tu masa muscular, mediante el uso de máquinas y pesas. Incrementa tu fuerza mientras
                         mejoras tu salud física.</p>
                    </div>
                </div>
                <div className='card'>
                    <img alt='crossfit' src={Crossfit}/>
                    <div className='contenido'>
                        <h2>CrossFit</h2>
                        <p>Realiza un entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales incorporando un 
                        amplio rango de equipamiento de fuerza, cardio, pliométricos y gimnasio.</p>
                    </div>
                </div>
            </section>
       </SlideInTop> </div>
    )
}
export default Principal;