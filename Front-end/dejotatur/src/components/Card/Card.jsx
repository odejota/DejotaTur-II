import React, { useEffect, useState } from 'react';
import conn from '../../server/conn';
import './Card.css';

function Card(props) {

    const [pacote, setPacote] = useState([]);

    useEffect(() => {
        conn.get('/pacotes')
        .then((res) => {
            setPacote(res.data)
        })
        .catch((erro) => console.log(erro))
    }, []);

    return (
        <>
            {pacote.map((pacote) => (
                <div className="col" key={pacote.idPacote}>
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url('+pacote.pacoteImg+')'}}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{pacote.pais}</h3>
                            <i><p className="mr-2"><i className="bi bi-pin-map-fill mb-2"></i> {pacote.destino}</p></i>
                            <small className="">a partir de </small><small className=" txtriscado">R$ {pacote.preco * 1.2}</small>
                            <h3 className="card-text display-6 promo">R$ {pacote.preco}</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <i className="bi bi-calendar3 me-2"></i>
                                    <small>{pacote.diarias}</small>
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <span className="material-icons md-18 me-1">airplanemode_active</span>
                                    <small>{pacote.aereo}</small>
                                </li>
                            </ul>
                            <button type="button" className="btn col-12 btncolor">Programar</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;