import React from "react";
import CardAdmin from "../../Card/Card.admin";
import './Promos.css';

function PacUptDel() {

    return (
        <section className="container-fluid section1">
            <div className="container">
                
                <h2 className="border-bottom">Gerenciamento de Pacotes</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                    <CardAdmin/>
            
                </div>
            </div>
        </section>
    );
}

export default PacUptDel;