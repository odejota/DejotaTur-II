import { useRef, React } from "react";
import { Offcanvas } from "react-bootstrap";
import conn from "../../../server/conn";

function PacOffcanvas(props) {

    const diarias = useRef();
    const aereo = useRef();
    const preco = useRef();
    const pacoteImg = useRef();
    const destino = useRef();
    const pais = useRef();

    function updateData(event) {
        event.preventDefault()
        conn.put('/pacotes/editarPacote', {
            idPacote: props.pacote.idPacote,
            diarias: diarias.current.value,
            aereo: aereo.current.value,
            preco: preco.current.value,
            pacoteImg: pacoteImg.current.value,
            destino: destino.current.value,
            pais: pais.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Offcanvas show={props.show} onHide={props.hClose}>
                <Offcanvas.Header closeButton style={{ backgroundImage: 'url('+props.pacote.pacoteImg+')'}}>
                    <Offcanvas.Title>{props.pacote.destino}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <form className="row g-3" onSubmit={updateData}>
                        <div className="col-md-6">
                            <label className="form-label">Destino</label>
                            <input required type="text" className="form-control" placeholder='Aruba' ref={destino} defaultValue={props.pacote.destino}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">País</label>
                            <input required type="text" className="form-control" placeholder='Aruba' ref={pais} defaultValue={props.pacote.pais}/>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Número de diárias</label>
                            <input required type="text" className="form-control" placeholder='3, 7, 15...' ref={diarias} defaultValue={props.pacote.diarias}/>
                        </div>
                        <div className="col-md-7">
                            <label className="form-label">Aéreo</label>
                            <select required className="form-select" ref={aereo} defaultValue={props.pacote.aereo}>
                                <option className='text-muted'>Escolha...</option>
                                <option value={"Aéreo incluso"}>Aéreo incluso</option>
                                <option value={"Aéreo não incluso"}>Aéreo não incluso</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Preço do pacote</label>
                            <input required type="text" className="form-control" placeholder="1234.56" ref={preco} defaultValue={props.pacote.preco}/>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Imagem do destino (link)</label>
                            <input required type="text" className="form-control" placeholder="https://unsplash.com/photos/IODgzztAYW8" ref={pacoteImg} defaultValue={props.pacote.pacoteImg}/>
                        </div>
                        <div className="col-12">
                            <button type='submit' className='btn btncolor'>Atualizar pacote</button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default PacOffcanvas;