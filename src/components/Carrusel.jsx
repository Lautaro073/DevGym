import '../Styles/Carrusel.css'
import carrusel1 from '../Img/carrusel1.jpg'
import carrusel2 from '../Img/carrusel2.jpg'
import carrusel3 from '../Img/carrusel3.jpg'
import carrusel4 from '../Img/carrusel4.jpg'
import carrusel5 from '../Img/carrusel5.jpg'
import carrusel6 from '../Img/carrusel6.jpg'

function Carrusel(){
    


    return(
    <div className='container-all'>

        <input type='radio' id='1' name='image-slidee' hidden/>
        <input type='radio' id='2' name='image-slidee' hidden/>
        <input type='radio' id='3' name='image-slidee' hidden/>
        <input type='radio' id='4' name='image-slidee' hidden/>
        <input type='radio' id='5' name='image-slidee' hidden/>
        <input type='radio' id='6' name='image-slidee' hidden/>

        <div className='slidee'>

        <div className='item-slidee'>
        <img alt='carrusel1' src={carrusel1}/>
        </div>

        <div className='item-slidee'>
        <img alt='carrusel2' src={carrusel2}/>
        </div>

        <div className='item-slidee'>
        <img alt='carrusel3' src={carrusel3}/>
        </div>

        <div className='item-slidee'>
        <img alt='carrusel4' src={carrusel4}/>
        </div>

        <div className='item-slidee'>
        <img alt='carrusel5' src={carrusel5}/>
        </div>

        <div className='item-slidee'>
        <img alt='carrusel6' src={carrusel6}/>
        </div>

    </div>

    <div className='pagination'>

    <label className='pagination-item' for="1">
    <img alt='carrusel1' src={carrusel1}/>
    </label>

    <label className='pagination-item' for="2">
    <img alt='carrusel2' src={carrusel2}/>
    </label>

    <label className='pagination-item' for="3">
    <img alt='carrusel3' src={carrusel3}/>
    </label>

    <label className='pagination-item' for="4">
    <img alt='carrusel4' src={carrusel4}/>
    </label>

    <label className='pagination-item' for="5">
    <img alt='carrusel5' src={carrusel5}/>
    </label>

    <label className='pagination-item' for="6">
    <img alt='carrusel6' src={carrusel6}/>
    </label>

    </div>

    </div>

    )
}
export default Carrusel;