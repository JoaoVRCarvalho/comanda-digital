import React from "react";
import Header from "./components/Navbar/Navbar";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Cadatros from './pages/CadastroProduto';
import ComandaDigital from './pages/comandaDigital';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route path="/comanda" element={<ComandaDigital/>}/>
                <Route path="/cadastro" element={<Cadatros/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}