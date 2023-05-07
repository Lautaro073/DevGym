import '../Styles/header.css'
import logo from '../Img/logo.png'
const Header = () => {
  return (
    <header className='header'>
    <img className='logo' src={logo}/>
    <h1 className='h1'>DevGym</h1>
    </header>
  )
}

export default Header