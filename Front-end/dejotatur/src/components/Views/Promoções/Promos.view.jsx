import './Promos.css';
import Card from "../../Card/Card";

function Promos() {

    return (
        <section className="container-fluid section1">
            <div className="container">
                
                <h2 className="border-bottom">Pacotes e Promoções</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                    <Card/>
            
                </div>
            </div>
        </section>
    );
}

export default Promos;