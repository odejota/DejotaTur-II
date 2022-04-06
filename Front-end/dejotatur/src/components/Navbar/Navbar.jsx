import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Img/DejotaTur-Logo.svg';
import './Navbar.css';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark navbarcolor fixed-top">
                <div className="container-fluid d-flex justify-content-center">
                    <Link to="/"><a className="navbar-brand float-start"><img src={logo} alt="" style={{ width: "25vh" }} /></a></Link>

                    <button className="navbar-toggler collapsed justify-content-center float-end" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation" wfd-invisible="true">
                        <span><i className="bi bi-grid-fill float-end"></i></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mt-4">
                                <Link to="/"><a className="nav-link active">Home</a></Link>
                            </li>
                            <li className="nav-item mt-4">
                                <Link to="/destinos"><a className="nav-link active">Destinos</a></Link>
                            </li>
                            <li className="nav-item mt-4">
                                <Link to="/promocoes"><a className="nav-link active">Promoções</a></Link>
                            </li>
                            <li className="nav-item mt-4">
                                <Link to="/contato"><a className="nav-link active">Contato</a></Link>
                            </li>
                            <li className="nav-item mt-4">
                                <Link to="/admin"><a className="nav-link active">Admin</a></Link>
                            </li>
                        </ul>
                        <div>
                            <button type="button" className="btn btn-sm btn-outline-light m-1 btnentrar">Login</button>
                            <button type="button" className="btn btn-sm btncolor m-1">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;