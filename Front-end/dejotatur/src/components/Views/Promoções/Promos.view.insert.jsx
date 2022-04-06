import './Promos.css';
import conn from '../../../server/conn';
import { useRef } from 'react';

function PacInsert() {

    const diarias = useRef();
    const aereo = useRef();
    const preco = useRef();
    const pacoteImg = useRef();
    const destino = useRef();
    const pais = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/pacotes/cadastrarPacote', {
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
            <section className="container-fluid destsection">
                <div className="container">

                    <h2 className="border-bottom">Cadastrar Pacotes</h2>

                    <form className="row g-3" onSubmit={sendData}>
                        <div className="col-md-6">
                            <label className="form-label">Destino</label>
                            <input required type="text" className="form-control" placeholder='Aruba' ref={destino} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">País</label>
                            <input required type="text" className="form-control" placeholder='Aruba' ref={pais} />
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Número de diárias</label>
                            <input required type="text" className="form-control" placeholder='3, 7, 15...' ref={diarias} />
                        </div>
                        <div className="col-md-7">
                            <label className="form-label">Aéreo</label>
                            <select required className="form-select" ref={aereo}>
                                <option className='text-muted'>Escolha...</option>
                                <option value={"Aéreo incluso"}>Aéreo incluso</option>
                                <option value={"Aéreo não incluso"}>Aéreo não incluso</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Preço do pacote</label>
                            <input required type="text" className="form-control" placeholder="1234.56" ref={preco} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Imagem do destino (link)</label>
                            <input required type="text" className="form-control" placeholder="https://unsplash.com/photos/IODgzztAYW8" ref={pacoteImg} />
                        </div>
                        <div className="col-12">
                            <button type='submit' className='btn btncolor'>Cadastrar pacote</button>
                        </div>
                    </form>
                    <small className="text-warning mt-3">ATENÇÃO: Antes criar um pacote, certifique-se de que o destino esteja cadastrado também.</small>
                </div>
            </section>
        </>
    )
}

export default PacInsert;