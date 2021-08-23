import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled">
                {
                    this.props.Badges.map((badge) =>{
                        return(
                            <li className="Card__badge" key={badge.id}>
                                <img className="Avatar__img" src={badge.avatarUrl} alt="userImg" />
                                <div className="User__details">
                                    <span className="Nombre">{badge.firstName} {badge.lastName}</span>
                                    <span className="Twitter"><i className="fab fa-twitter"></i> @{badge.twitter}</span>
                                    <span className="TituloTrabajo">{badge.jobTitle}</span>
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