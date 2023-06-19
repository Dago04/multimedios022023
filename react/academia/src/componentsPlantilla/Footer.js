import React from 'react';

import './estilos.css'

import 'bootstrap/dist/css/bootstrap.css'



class FooterPrincipal extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>
                <footer className=" text-white footerReact" >
                    <div className="container d-flex justify-content-between align-items-center py-3 border-highlight">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="me-2 text-muted text-decoration-none">
                                <i className="bi bi-cup"></i>
                                <span>&copy; Proyecto React</span>
                            </a>
                        </div>
                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-white">
                            <li className="ms-3 "><a className="text-muted" href="#"><i className="bi bi-twitter"></i></a></li>
                            <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-instagram"></i></a></li>
                            <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-facebook"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>



        );
    }
}

export default FooterPrincipal;