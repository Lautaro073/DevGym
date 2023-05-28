import '../Styles/nav.css'

function Nav(){
    
    return(
        <nav className='navbar'>
        <a href='#' className='logo'>DevGym</a>
        <input type='checkbox' id='toggler'></input>
        <label className='fabars' for='toggler'><i className='fa fa-bars'></i></label>
        <div className='menu'>
        <ul className='lista'>
            <li><a href='#Clases'>Clases</a></li>
            <li><a href='#Instalaciones'>Instalaciones</a></li>
            <li><a href='#coach'>Coaches</a></li>
            <li><a href='#Contacto'>Contacto</a></li>
        </ul>
        </div>
        </nav>
    )
}
export default Nav;