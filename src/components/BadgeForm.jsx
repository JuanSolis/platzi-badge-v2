import React from 'react';

class BadgeForm extends React.Component {
   
    handleClick = (e) => {
        console.log("Buton Clickeadlo");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Enviado");
    }
    
    render(){
        return(
            <div>
                <h1>Nuevo Parcipante</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Primer Nombre</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="nombre" value={this.props.formValues.nombre} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="apellido" value={this.props.formValues.apellido} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Profesion</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="tituloTrabajo" value={this.props.formValues.tituloTrabajo} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;