import React from 'react';
import './estilos.css'


class MenuPrincipal extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  menuPrincipal">
                    <div className="container-fluid">
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/">HomePage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/ListarCursos">Cursos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/CrearCurso">Crear Curso</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/ListarGrupos">Grupos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/CrearGrupo">Crear Grupo</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default MenuPrincipal;

