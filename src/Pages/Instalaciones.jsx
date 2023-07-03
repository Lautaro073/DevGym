import '../Styles/Carrusel.css'
import inst1 from '../Img/inst1.jpg'
import inst2 from '../Img/inst2.jpg'
import inst3 from '../Img/inst3.jpg'
import inst4 from '../Img/inst4.png'
import inst5 from '../Img/inst5.png'
import inst6 from '../Img/inst6.jpg'

function Carrusel(){
    return(
        <>
        <div className='fondo-carrusel' id='Instalaciones'>
            <h1 className='tit-carrusel'>INSTALACIONES</h1>
            <div className='container-all'>
                <input type='radio' id='1' name='image-slidee' hidden/>
                <input type='radio' id='2' name='image-slidee' hidden/>
                <input type='radio' id='3' name='image-slidee' hidden/>
                <input type='radio' id='4' name='image-slidee' hidden/>
                <input type='radio' id='5' name='image-slidee' hidden/>
                <input type='radio' id='6' name='image-slidee' hidden/>

            <div className='slidee'>
            <div className='item-slidee'>
                <img alt='inst1' src={inst1}/>
            </div>
            <div className='item-slidee'>
                <img alt='inst2' src={inst2}/>
            </div>
            <div className='item-slidee'>
                <img alt='inst3' src={inst3}/>
            </div>
            <div className='item-slidee'>
                <img alt='inst4' src={inst4}/>
            </div>
            <div className='item-slidee'>
                <img alt='inst5' src={inst5}/>
            </div>
            <div className='item-slidee'>
                <img alt='inst6' src={inst6}/>
            </div>
            </div>
     
            <div className='pagination'>
                <label className='pagination-item' for="1">
                    <img alt='inst1' src={inst1}/>
                </label>
                <label className='pagination-item' for="2">
                    <img alt='inst2' src={inst2}/>
                </label>
                <label className='pagination-item' for="3">
                    <img alt='inst3' src={inst3}/>
                </label>
                <label className='pagination-item' for="4">
                    <img alt='inst4' src={inst4}/>
                </label>
                <label className='pagination-item' for="5">
                    <img alt='inst5' src={inst5}/>
                </label>
                <label className='pagination-item' for="6">
                    <img alt='inst6' src={inst6}/>
                </label>
            </div>
            </div> 
        </div>
        </>
    )
}
export default Carrusel;