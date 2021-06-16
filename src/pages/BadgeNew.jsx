import React from 'react';
import './styles/BadgeNew.css';
import Header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="Background-estrellas" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                nombre="Juan A." 
                                apellido="Solis" 
                                github="JuanSolis"
                                tituloTrabajo="Frontend Student"
                                urlAvatar="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;