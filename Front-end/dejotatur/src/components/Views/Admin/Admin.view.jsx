import { Link } from "react-router-dom";
// import './Admin.css';

function Admin() {

    return (
        <section className="container-fluid destsection">
            <div className="container table-responsive-xxl">

                <h2 className="border-bottom">Área do Administrador</h2>

                <h4>Destinos</h4>
                <table className="table table-hover shadow-sm">
                    <tbody>
                        <tr>
                            <td>Cadastrar destino</td>
                            <td><Link to='/destinos/cadastrarDestino'><button className="btn btncolor btn-sm"><i className="bi bi-plus-lg"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Editar destino</td>
                            <td><Link to='/editarDestino'><button className="btn btn-warning btn-sm"><i className="bi bi-pencil-fill"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Apagar destino</td>
                            <td><Link to='/apagarDestino'><button className="btn btn-danger btn-sm"><i className="bi bi-x-lg"></i></button></Link></td>
                        </tr>
                    </tbody>
                </table>

                <h4>Pacotes</h4>
                <table className="table table-hover shadow-sm">
                <tbody>
                        <tr>
                            <td>Cadastrar pacote</td>
                            <td><Link to='/pacotes/cadastrarPacote'><button className="btn btncolor btn-sm"><i className="bi bi-plus-lg"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Gerenciar pacotes</td>
                            <td><Link to='/gerenciarPacote'><button className="btn btn-primary btn-sm"><i className="bi bi-grid-3x3-gap-fill"></i></button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Admin;