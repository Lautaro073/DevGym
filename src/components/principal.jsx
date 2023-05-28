import '../Styles/principal.css'
import funcional from '../Img/funcional.jpg'
import musculacion from '../Img/musculacion.jpg'
import crossfit from '../Img/crossfit.jpeg'

function Principal(){
    return(

        <div className='fondo'>
            <h1 className='tit' id='Clases'>CLASES</h1>
            <section className='section'>
                <div className='card'>
                    <img alt='funcional' src={funcional}/>
                    <div className='contenido'>
                        <h2>Funcional</h2>
                        <p>Trabaja de forma global músculos y articulaciones realizando ejercicios que mejoran la movilidad corporal,
                         la agilidad y el equilibrio, desarrolla la salud cardiovascular, corrige la postura y fortalece la masa muscular.</p>
                    </div>
                </div>
                <div className='card'>
                    <img alt='musculacion' src={musculacion}/>
                    <div className='contenido'>
                        <h2>Musculación</h2>
                        <p>Tonifica y desarrolla tu masa muscular, mediante el uso de máquinas y pesas. Incrementa tu fuerza mientras
                         mejoras tu salud física.</p>
                    </div>
                </div>
                <div className='card'>
                    <img alt='crossfit' src={crossfit}/>
                    <div className='contenido'>
                        <h2>CrossFit</h2>
                        <p>Realiza un entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales incorporando un 
                        amplio rango de equipamiento de fuerza, cardio, pliométricos y gimnasio.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Principal;