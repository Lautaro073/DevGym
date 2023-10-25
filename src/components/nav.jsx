import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

function Nav() {
    const closeMenu = () => {
        document.getElementById('toggler').checked = false;
    };

    return (
        <nav className='navbar'>
            <input type='checkbox' id='toggler' />
            <label className='fabars toggler-circle' htmlFor='toggler'>
    <i className='fa fa-bars'></i>
</label>

            <div className='menu-container'>
                <ul className='lista menu'>
                    <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                    <li><Link to="/Clases" onClick={closeMenu}>Clases</Link></li>
                    <li><Link to="/Instalaciones" onClick={closeMenu}>Entrenamientos</Link></li>
                    <li><Link to="/Coach" onClick={closeMenu}>Coach</Link></li>
                    <li><Link to="/Contacto" onClick={closeMenu}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

