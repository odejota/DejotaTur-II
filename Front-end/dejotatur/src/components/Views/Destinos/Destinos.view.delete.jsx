import React from "react";
import './Destinos.css';
import conn from "../../../server/conn";
import { useEffect, useState } from 'react';

function DestDel() {

    const [destino, setDestino] = useState([]);

    useEffect(() => {
        conn.get('/destinos')
            .then((res) => {
                setDestino(res.data)
            })
            .catch((erro) => console.log(erro.data))
    }, []);

    function deletar(del){
        conn.delete(`/destinos/${del.target.value}`)
        .then(() => conn.get('/destinos')
        .then((res) => {
            setDestino(res.data)
        })
        .catch((erro) => console.log(erro))).catch((erro) => console.log(erro))
    }

    return (
        <>
            <section className="container-fluid destsection">
                <div className="container table-responsive-xxl">

                    <h2 className="border-bottom">Apagar Destinos</h2>

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
                                        <button className="btn btn-danger btn-sm" value={destino.idDestino} onClick={(del) => deletar(del)}><i className="bi bi-backspace-fill me-1"></i>Apagar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <small className="text-danger">ATENÇÃO: Ao apagar um destino, lembre-se de apagar também seu(s) respectivo(s) pacote(s), se houver.</small>
                </div>
            </section>
        </>
    );
}

export default DestDel;