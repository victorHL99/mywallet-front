import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "../Login";
import Registrar from "../Registrar";

import UsuarioContext from "../context/UsuarioContext";

export default function App(){
    const [token, setToken] = React.useState("");
    return (
        <UsuarioContext.Provider value={{
            token,
            setToken
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/registrar" element={<Registrar/>}/>
                </Routes>
            </BrowserRouter>
        </UsuarioContext.Provider>
    )
}