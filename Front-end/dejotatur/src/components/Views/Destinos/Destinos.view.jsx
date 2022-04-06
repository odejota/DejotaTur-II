import React from "react";
import './Destinos.css';
import conn from "../../../server/conn";
import { useEffect, useState } from 'react';

function Destinos() {

    const [destino, setDestino] = useState([]);

    useEffect(() => {
        conn.get('/destinos')
            .then((res) => {
                setDestino(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    return (
        <>
            <section className="container-fluid destsection">
                <div className="container table-responsive-xxl">

                    <h2 className="border-bottom">Destinos</h2>

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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default Destinos;