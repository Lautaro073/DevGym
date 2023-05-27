import '../Styles/profes.css'
import t1 from '../Img/t1.jpg'
import t2 from '../Img/t2.jpg'
import t3 from '../Img/t3.jpg'
import Profes from '../components/profes'
function Coach(){
    
    return(
        <div className="coaches  py-lg-4 py-md-3 py-sm-3 py-3" id="coach">
        <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
       <h3 className="coach-title text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">COACHES</h3>
       <div className="row text-center grupo">
       
        <Profes
        icon={t1}
        nombre="Matias Fernadez"    
        enseña="Musculacion"
        descripcion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum "
        />
         <Profes
        icon={t2}
        nombre="Maria Leiva"    
        enseña="Pilates"
        descripcion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum "
        />
          <Profes
        icon={t3}
        nombre="Maria Gomez"    
        enseña="Crossfit"
        descripcion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum "
        /> 
        </div>
        </div>
        </div>
    )
}
export default Coach;