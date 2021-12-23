import React from "react";
import astronaut404 from '../images/1-06.png';
import "./styles/NotFound.css";

function NotFound(){
    return(
        <div className="notFound-container d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 d-flex justify-content-center">
                        <img src={astronaut404} className="img-fluid" alt="Not Found Img" />
                    </div>
                    <div className="col-xs-12 col-sm-5 d-flex flex-column justify-content-center text-center">
                        <h1>404</h1>
                        <h2>Página no encontrada</h2>
                        <h5>¡Oops no encontramos lo que buscas!</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;