import React from "react";
import landingImg from '../images/landing-astronautas.svg';
import confImg from '../images/platziconf-logo.svg';
import { Link } from "react-router-dom";
import './styles/Home.css';

function Home(){
    return(
        <div className="landing-Page d-flex align-items-center">
            <div className="container">
                <div className="row ">
                    <div className="col-xs-12 col-sm-4  d-flex flex-column justify-content-center">
                        <img className="img-fluid" src={confImg} alt="Platzi Conf" />
                        <h1 className="landing-Title mt-3">Sistema de Gestión de Insignias</h1>
                        <div className="Badges__buttons mt-1">
                            <Link to="/badges" className="btn btn-primary">Empezar</Link>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-sm-8">
                        <img className="img-fluid" src={landingImg} alt="Landing Platzi Conf" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;