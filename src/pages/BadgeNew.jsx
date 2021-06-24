import React from 'react';
import './styles/BadgeNew.css';
import Header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = {
        form:{
            nombre: "",
            apellido: "",
            email: "",
            tituloTrabajo: "",
            twitter:""
        }
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="Header Background" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                nombre= {this.state.form.nombre}
                                apellido= {this.state.form.apellido}
                                twitter= {this.state.form.twitter}
                                tituloTrabajo= {this.state.form.tituloTrabajo}
                                urlAvatar="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;