import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Views/Home/Home.view';
import Destinos from './components/Views/Destinos/Destinos.view';
import Promos from './components/Views/Promoções/Promos.view';
import Contato from './components/Views/Contato/Contato.view';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Admin from './components/Views/Admin/Admin.view';
import DestInsert from './components/Views/Destinos/Destinos.view.insert';
import DestDel from './components/Views/Destinos/Destinos.view.delete';
import DestUpt from './components/Views/Destinos/Destinos.view.update';
import PacInsert from './components/Views/Promoções/Promos.view.insert';
import PacUptDel from './components/Views/Promoções/Promos.view.update.delete';
import Carousel from './components/Carousel/Carousel';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navbar/>
            <Carousel/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/destinos" element={<Destinos/>}></Route>
                <Route path="/promocoes" element={<Promos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                    <Route path='/destinos/cadastrarDestino' element={<DestInsert/>}></Route>
                    <Route path='/editarDestino' element={<DestUpt/>}></Route>
                    <Route path='/apagarDestino' element={<DestDel/>}></Route>
                    <Route path='/pacotes/cadastrarPacote' element={<PacInsert/>}/>
                    <Route path='gerenciarPacote' element={<PacUptDel/>}/>
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);