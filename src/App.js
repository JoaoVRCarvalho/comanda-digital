import React from "react";
import Header from "./components/Navbar/Navbar";
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import CadatroProduto from './pages/CadastroProduto'
import CadatroFuncionario from './pages/CadastroFuncionario'
import CadastroPrato from "./pages/CadastroPratos";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route path="/produto" element={<CadatroProduto/>}/>
                <Route path="/funcionario" element={<CadatroFuncionario/>}/>
                <Route path="/prato" element={<CadastroPrato/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}