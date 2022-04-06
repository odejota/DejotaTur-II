import React from "react";
import './Destinos.css';
import conn from "../../../server/conn";
import { useEffect, useState } from 'react';
import DestOffcanvas from "./Offcanvas";

function DestUpt() {

    const [show, setShow] = useState(false);
    const hClose = () => {setShow(false);}
    const hShow = (destino) => {
        setShow(true);
        setDestinoUpdt(destino);
    }

    const [destino, setDestino] = useState([]);
    const [destinoUpdt, setDestinoUpdt] = useState();

    useEffect(() => {
        conn.get('/destinos')
            .then((res) => {
                setDestino(res.data)
            })
            .catch((erro) => console.log(erro.data))
    }, []);

    return (
        <>
            <section className="container-fluid destsection">
                <div className="container table-responsive-xxl">

                    <h2 className="border-bottom">Editar Destinos</h2>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Cidade/Região</th>
                                <th>País</th>
                                <th>Continente</th>
                                <th>Aeroportos próximos (Código IATA)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {destino.map((destino) => (
                                <tr key={destino.idDestino}>
                                    <td>{destino.cidade}</td>
                                    <td>{destino.pais}</td>
                                    <td>{destino.continente}</td>
                                    <td>{destino.aeroportos_IATA}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm" onClick={() => hShow(destino)}><i className="bi bi-pencil-fill me-1"></i>Editar</button>
                                    </td>
                                </tr>
                            ))}
                            {show ? <DestOffcanvas show={show} hClose={hClose} destino={destinoUpdt}/> : <></>}
                        </tbody>
                    </table>
                    <small className="text-warning">ATENÇÃO: Ao editar um destino, lembre-se de editar também seu(s) respectivo(s) pacote(s), se houver.</small>
                </div>
            </section>
        </>
    );
}

export default DestUpt;