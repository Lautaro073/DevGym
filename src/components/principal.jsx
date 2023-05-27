import '../Styles/principal.css'
import pilates from '../Img/pilates.jpg'
import musculacion from '../Img/musculacion.jpg'
import crossfit from '../Img/crossfit.jpeg'

function Principal(){
    return(

        <div>
            <h1 className='tit'>CLASES</h1>
            <section className='section'>
                <div className='card'>
                    <img alt='pilates' src={pilates}/>
                    <div className='contenido'>
                        <h2>Pilates</h2>
                        <p>Trabaja tus músculos en profundidad mientras los relaja. Fortalece el cuerpo y la mente desde la parte más profunda a la más superficial, aumentando y uniendo el dinamismo y la fuerza muscular con el control mental, la relajación y la respiración.</p>
                    </div>
                </div>
                <div className='card'>
                    <img alt='musculacion' src={musculacion}/>
                    <div className='contenido'>
                        <h2>Musculación</h2>
                        <p>Tonifica y desarrolla tu masa muscular, mediante el uso de máquinas y pesas. Incrementa tu fuerza mientras mejoras tu salud física.</p>
                    </div>
                </div>
                <div className='card'>
                    <img alt='crossfit' src={crossfit}/>
                    <div className='contenido'>
                        <h2>CrossFit</h2>
                        <p>Realiza un entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales incorporando un amplio rango de equipamiento de fuerza, cardio, pliométricos y gimnasio.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Principal;