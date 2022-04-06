import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import './Home.css';

function Home() {
    return (
        <section className="container-fluid section1">
            <div className="container">
                
                <h2 className="border-bottom">Pacotes em destaque</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                    <Card/>

                </div>
                <Link to="/promocoes" className="btn btn-lg btnpromos">VER TODOS OS PACOTES</Link>

            </div>
        </section>
    );
}

export default Home;