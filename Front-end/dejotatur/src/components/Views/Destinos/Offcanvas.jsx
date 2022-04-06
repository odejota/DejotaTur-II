import { useRef, React } from "react";
import { Offcanvas } from "react-bootstrap";
import conn from "../../../server/conn";

function DestOffcanvas(props) {

    const cidade = useRef();
    const pais = useRef();
    const continente = useRef();
    const aeroportos_IATA = useRef();

    function updateData(event) {
        event.preventDefault()
        conn.put('/destinos/editarDestino', {
            idDestino: props.destino.idDestino,
            cidade: cidade.current.value,
            pais: pais.current.value,
            continente: continente.current.value,
            aeroportos_IATA: aeroportos_IATA.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Offcanvas show={props.show} onHide={props.hClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.destino.cidade}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form onSubmit={updateData}>
                        <div className="row">
                            <div className="col">
                                <label>Cidade</label>
                                <input required type="text" className="form-control" placeholder="São Paulo" ref={cidade} defaultValue={props.destino.cidade}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>País</label>
                                <input required type="text" className="form-control" placeholder="Brasil" ref={pais} defaultValue={props.destino.pais}/>
                            </div>
                            <div className="col">
                                <label>Continente</label>
                                <input type="text" className="form-control" placeholder="América do Sul" ref={continente} defaultValue={props.destino.continente}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>Aeroportos que atendem a cidade (IATA)</label>
                                <input required type="text" className="form-control" placeholder="CGH, GRU e VCP" ref={aeroportos_IATA} defaultValue={props.destino.aeroportos_IATA}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type='submit' className='btn btncolor mt-3'>Atualizar destino</button>
                            </div>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default DestOffcanvas;