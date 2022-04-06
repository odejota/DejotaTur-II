import './Destinos.css';
import conn from '../../../server/conn';
import { useRef } from 'react';

function DestInsert() {

    const cidade = useRef();
    const pais = useRef();
    const continente = useRef();
    const aeroportos_IATA = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/destinos/cadastrarDestino', {
            cidade: cidade.current.value,
            pais: pais.current.value,
            continente: continente.current.value,
            aeroportos_IATA: aeroportos_IATA.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <>
            <section className="container-fluid destsection">
                <div className="container">

                    <h2 className="border-bottom">Cadastrar Destinos</h2>

                    <form onSubmit={sendData}>
                        <div className="row">
                            <div className="col">
                                <label>Cidade</label>
                                <input required type="text" className="form-control" placeholder="São Paulo" ref={cidade} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>País</label>
                                <input required type="text" className="form-control" placeholder="Brasil" ref={pais} />
                            </div>
                            <div className="col">
                                <label>Continente</label>
                                <input type="text" className="form-control" placeholder="América do Sul" ref={continente} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>Aeroportos que atendem a cidade (IATA)</label>
                                <input required type="text" className="form-control" placeholder="CGH, GRU e VCP" ref={aeroportos_IATA} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type='submit' className='btn btncolor mt-3'>Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default DestInsert;