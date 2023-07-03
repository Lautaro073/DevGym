import { Link } from 'react-router-dom';
import '../Styles/Nav.css'

function Nav(){
    
    return(
        <nav className='navbar'>
      <Link to="/">DevGym</Link>
        <input type='checkbox' id='toggler'></input>
        <label className='fabars' htmlFor='toggler'><i className='fa fa-bars'></i></label>
        <div className='menu'>
        <ul className='lista'>
            <li><Link to="/Clases">Clases</Link></li>
            <li><Link to="/Instalaciones">Instalaciones</Link></li>
            <li><Link to="/Coach">Coach</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
            
        </ul>
        </div>
        </nav>
    )
}
export default Nav;