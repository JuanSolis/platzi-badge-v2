import React from 'react';
import Logo from '../images/logo.svg'
import './styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
                        <span className="fw-lighter">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}


export default Navbar;