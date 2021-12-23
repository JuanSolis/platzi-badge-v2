import React from 'react';
import md5 from 'md5';
import api from '../api';
import './styles/BadgeNew.css';
import Header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = {
        loading:true,
        error: null,
        flag: false,
        form:{
            nombre: "",
            apellido: "",
            email: "",
            tituloTrabajo: "",
            twitter:"",
            avatarUrl: "https://www.gravatar.com/avatar/default?d=identicon"
        }
    };

    handleChange = (e) => {
        let hash = ""
        if (e.target.name === "email") {
            hash = md5(e.target.value);
        }
        if (hash.length > 0) {
            this.setState({
                form: {
                    ...this.state.form,
                    [e.target.name]:e.target.value,
                    avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
                }
            }); 
        }else {
            this.setState({
                form: {
                    ...this.state.form,
                    [e.target.name]:e.target.value
                }
            });
        }
       
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            loading: true, 
            error: null
        });

        try{
            this.setState({
                loading: false
            });
            await api.badges.create(this.state.form);
            console.log(this.state.form);
        }catch(error){
            this.setState({
                loading: false, 
                error: error
            });
            console.log("Error User no creado");
        }
        
    }

    render(){
        return(
            <React.Fragment>
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
                                email= {this.state.form.email}
                                tituloTrabajo= {this.state.form.tituloTrabajo}
                                avatarUrl={this.state.form.avatarUrl}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;