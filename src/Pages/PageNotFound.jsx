import React from 'react';
import '../Styles/PageNotFound.css'
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <p>Lo sentimos, la página que estás buscando no se puede encontrar.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default PageNotFound;
