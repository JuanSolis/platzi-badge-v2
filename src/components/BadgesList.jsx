import React from 'react';
import './styles/BadgesList.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

class BadgesList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            this.props.loading 
            ? 
            <ul className="list-unstyled">
                <li className="Card__badge" >
                    <Skeleton
                        className="Avatar__img"
                        circle
                    />
                    <div className="User__details">
                        <span style={{"width" : "100%"}}><Skeleton count={3}/></span>
                    </div> 
                </li>
                <li className="Card__badge" >
                    <Skeleton
                        className="Avatar__img"
                        circle
                    />
                    <div className="User__details">
                        <span style={{"width" : "100%"}}><Skeleton count={3}/></span>
                    </div> 
                </li>
                <li className="Card__badge" >
                    <Skeleton
                        className="Avatar__img"
                        circle
                    />
                    <div className="User__details">
                        <span style={{"width" : "100%"}}><Skeleton count={3}/></span>
                    </div> 
                </li>
            </ul>
            
            :
            <ul className="list-unstyled">
                {
                    this.props.Badges.reverse().map((badge) =>{
                        return(
                            <li className="Card__badge" key={badge.id}>
                                <img className="Avatar__img" src={badge.avatarUrl} alt="userImg" />
                                <div className="User__details">
                                    <span className="Nombre">{badge.nombre} {badge.apellido}</span>
                                    <span className="Twitter"><i className="fab fa-twitter"></i> @{badge.twitter}</span>
                                    <span className="TituloTrabajo">{badge.tituloTrabajo}</span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default BadgesList;