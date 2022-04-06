import React from "react";
import './Contato.css';

function Contato() {
    return (
        <>
        <section className="contatosection container-fluid">
            <div className="container">
                <h2 className="border-bottom">Contato</h2>

                <div className="row">
                    <div className="col-lg col-md-12 col-sm-12">
                        <h4>Televendas</h4>
                        <p><i className="bi bi-headset"></i> Central: (11) XXXX-XXXX</p>
                        <p><i className="bi bi-whatsapp"></i> WhatsApp: (11) 9XXXX-XXXX</p>
                        <small><p>Segunda à Sábado: 09h às 21h</p></small>
                    </div>
                    <div className="col-lg col-md-12 col-sm-12">
                        <h4>E-mail</h4>
                        <p><i className="bi bi-envelope"></i> Qualquer dúvida, pode enviar uma mensagem para duvidas@dejotatur.com.</p>
                        <p><i className="bi bi-envelope-plus"></i> Para reserva de grupos (+9 viajantes), pode enviar uma mensagem para grupos@dejotatur.com.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contato;