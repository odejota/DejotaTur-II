import React from "react";
import './Carousel.css';

import LenMa from '../../Img/carousel-marcreation-unsplash.jpg';
import Toquio from '../../Img/carousel-clement-souchet-unsplash.jpg';
import Ushu from '../../Img/carousel-diogo-hungria-unsplash.jpg';
import SanAnd from '../../Img/carousel-guillermo-bresciano-unsplash.jpg';
import Sant from '../../Img/carousel-hello-lightbulb-unsplash.jpg';
import FeNor from '../../Img/carousel-rodolfo-barreto-unsplash.jpg';

function Carousel() {
    return (
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={LenMa} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-start">
                        <h5>Lençóis Maranhenses</h5>
                        <p>O Parque Nacional dos Lençóis Maranhenses é uma área protegida na costa atlântica norte do Brasil. É conhecido pela sua vasta paisagem desértica de grandes dunas de areia branca e pelas lagoas sazonais de água da chuva.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Toquio} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Tóquio</h5>
                        <p>Tóquio é repleta de história. Sua malha urbana conta com uma paisagem constituída de ruas movimentadas, edifícios e monumentos suntuosos, templos, museus, parques e jardins.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Ushu} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-start">
                        <h5>Ushuaia</h5>
                        <p>A melhor época do ano para se visitar Ushuaia é durante o verão, quando os dias têm mais horas de sol e são menos gelados. Fica mais agradável fazer o passeio pelo Parque Nacional Tierra del Fuego e, principalmente, é durante o verão que se vê mais pinguins na Ilha Martillo.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={SanAnd} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-end">
                        <h5>San Andrés</h5>
                        <p>San Andrés é uma autêntica ilha caribenha. O local, que é sede do arquipélago de San Andrés, Providência Santa Catalina, foi a base militar de um notável personagem conhecido como Pirata Morgan e hoje é um dos destinos do Caribe mais acessíveis para se visitar.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Sant} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Santorini</h5>
                        <p>Santorini (ou Thira, em grego) é uma das mais espetaculares ilhas gregas. Com um formato de meia-lua, rodeia uma caldeira vulcânica inundada pelo mar.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={FeNor} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-start">
                        <h5>Fernando de Noronha</h5>
                        <p>Fernando de Noronha mexe com o imaginário de muitos brasileiros. O lugar tem fama de ser uma paraíso na Terra, e quer saber? É mesmo.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Carousel;