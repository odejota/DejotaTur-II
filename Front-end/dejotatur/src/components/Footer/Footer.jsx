import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Img/DejotaTur-Logo.svg';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer className="container-fluid footer1">
                <div className="container py-5">
                    <div className="row">
                        <div class="col-12 col-md-12 col-lg-3 d-flex flex-column justify-content-center text-center">
                            <Link to="/"><a className="d-inline-flex align-items-center">
                                <img src={logo} alt="" style={{ width: "23vh" }} />
                            </a></Link>
                            <small class="d-block text-muted">© 2022 DejotaTur LTDA.</small>
                            <small class="d-block text-muted">Todos os direitos reservados.</small>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6 d-flex justify-content-center mt-3" aria-label="breadcrumb">
                            <ul class="list-unstyled text-small breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/"><a className='link-secondary'>Home</a></Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/destinos"><a className='link-secondary'>Destinos</a></Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/promocoes"><a className='link-secondary'>Promoções</a></Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/contato"><a className='link-secondary'>Contato</a></Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/admin"><a className='link-secondary'>Admin</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-12 col-lg-3 mt-3">
                            <ul class="list-unstyled list-inline text-small">
                                <li className='list-inline-item mx-3'><a href="#" className="col-2 link-secondary socialmedia"><i className="bi bi-instagram"></i></a></li>
                                <li className='list-inline-item mx-3'><a href="#" className="col-2 link-secondary socialmedia"><i className="bi bi-twitter"></i></a></li>
                                <li className='list-inline-item mx-3'><a href="#" className="col-2 link-secondary socialmedia"><i className="bi bi-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid text-center footer2">
                <p className=" mt-3">Desenvolvido por Danilo "Dejota" José</p>
            </div>
        </div>
    );
}

export default Footer;