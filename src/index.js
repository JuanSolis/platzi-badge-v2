// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
//const element = <h1>Hello, Platzi Badges!</h1>;

//const element = React.createElement('h1',{}, 'Hola, Soy los children');
const name = "Carlos"

//const element = React.createElement('h1',{},`Hola soy ${name}`);

//const element = <h1>Hola soy, {name}</h1>

// const element = (
//     <div>
//         <h1>Hola, soy Juan</h1>
//         <p>Soy estudiante JS</p>
//     </div>
// )
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <BadgeNew/>
    , container
);

{/* <Badge
        nombre="Juan A."
        apellido="Solis"
        urlAvatar="https://www.gravatar.com/avatar?d=identicon"
        tituloTrabajo="Frontend Student"
        github="JuanSolis"
/> */}