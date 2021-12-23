import React from 'react';
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                        <span className="fw-lighter">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Navbar;