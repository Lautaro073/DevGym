import React from 'react';
import '../Styles/Instalaciones.css';
import inst1 from '../Img/inst1.png';
import inst2 from '../Img/inst2.png';
import inst3 from '../Img/inst3.png';
import inst4 from '../Img/inst4.png';
import inst5 from '../Img/inst5.png';
import inst6 from '../Img/inst6.png';

function Carrusel() {
    return (
        <div className="fondo-carrusel" id="Instalaciones">
            <h1 className="tit-carrusel">Entrenamientos</h1>
            <p className="desc-carrusel">
                Descubre nuestros entrenamientos diseñadas para ofrecerte el mejor resultado y la mejor experiencia.
            </p>
            <div className="carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={inst1} className="d-block w-100" alt="inst1" />
                        </div>
                        <div className="carousel-item">
                            <img src={inst2} className="d-block w-100" alt="inst2" />
                        </div>
                        <div className="carousel-item">
                            <img src={inst3} className="d-block w-100" alt="inst3" />
                        </div>
                        <div className="carousel-item">
                            <img src={inst4} className="d-block w-100" alt="inst4" />
                        </div>
                        <div className="carousel-item">
                            <img src={inst5} className="d-block w-100" alt="inst5" />
                        </div>
                        <div className="carousel-item">
                            <img src={inst6} className="d-block w-100" alt="inst6" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrusel;
