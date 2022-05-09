import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "../Login";
import Registrar from "../Registrar";
import PaginaPrincipal from "../PaginaPrincipal";
import NovaEntrada from "../NovaEntrada";
import NovaSaida from "../NovaSaida";

import UsuarioContext from "../../context/UsuarioContext";

export default function App(){
    const [user, setUser] = React.useState(null);
    const [dados, setDados] = React.useState(null);
    return (
        <UsuarioContext.Provider value={{user,setUser,dados,setDados}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/registrar" element={<Registrar/>}/>
                    <Route path="/paginaPrincipal" element={<PaginaPrincipal/>}/>
                    <Route path="/novaEntrada" element={<NovaEntrada/>}/>
                    <Route path="/novaSaida" element={<NovaSaida/>}/>
                </Routes>
            </BrowserRouter>
        </UsuarioContext.Provider>
    )
}