import React from 'react';
import logo from '../logo.svg';
import imagenFondo from '../componentsPlantilla/imagenes/dashboard.jpg'
import './estilos.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='container p-5'  >
              <h5>Proyecto React</h5>
              <img className='background-image img-fluid rounded' src={imagenFondo} alt="logo"/>
            </div>
         );
    }
}
 
export default Dashboard;