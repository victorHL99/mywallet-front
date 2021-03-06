import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import Loading from "../Loading/Loading";

export default function Registrar() {
    const [CarregarRegistro, setCarregarRegistro] = React.useState("Cadastrar");
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [confirmarSenha, setConfirmarSenha] = React.useState("");
    const [ativarBotao, setAtivarBotao] = React.useState(false);

    const navegar = useNavigate();

    async function enviarRegistro() {
        setCarregarRegistro(<Loading/>);
        setAtivarBotao(true);

        const URL_REGISTRO = "http://localhost:5000/registrar";
        const promise = axios.post(URL_REGISTRO, {
            nome,
            email,
            senha,
            confirmarSenha
        });

        promise.then(response => {
            console.log(response.data);
            navegar("/");
        });
        promise.catch(error => {
            console.log(error.response);
            alert("Dados Inválidos, Preencha Novamente!")
            setAtivarBotao(false)
            setCarregarRegistro("Cadastrar")
        })
        
    }

    return (
        <Main>
            <Logo>MyWallet</Logo>
            <Input type="text" placeholder="Nome" disable={ativarBotao} value={nome} onChange={(e)=>setNome(e.target.value)}></Input>
            <Input type="text" placeholder="E-mail" disable={ativarBotao} value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="Senha" disable={ativarBotao} value={senha} onChange={(e)=>setSenha(e.target.value)}></Input>
            <Input type="password" placeholder="Confirmar senha" disable={ativarBotao} value={confirmarSenha} onChange={(e)=>setConfirmarSenha(e.target.value)}></Input>
            <ButtonCadastrar onClick={enviarRegistro}><p>{CarregarRegistro}</p></ButtonCadastrar>
            <Login><Navegar to="/"><p>Já tem uma conta? Faça login!</p></Navegar></Login>
        </Main>
    )
}

const Main = styled.div`
    background-color:#8C11BE ;
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    top: 0;
`
const Logo = styled.div`
    position: absolute;
    z-index: 1;
    width: 147px;
    height: 50px;
    left: 113px;
    top: 95px;
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
const Input = styled.input`
    position: relative;
    z-index: 1;
    width: 326px;
    height: 58px;
    top: 173px;
    margin-bottom:13px;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-family:'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border: 1px solid #D5D5D5;
    cursor: text;
    
    

    &::placeholder {
        position: relative;
        color: #000000;
        width: 162px;
        height: 23px;
        left: 15px;
        font-family:'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`

const ButtonCadastrar = styled.button`
    background-color: #A328D6;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #A328D6;
    width: 326px;
    height: 46px;
    top: 472px;
    cursor: pointer;

    p{
        position: relative;
        z-index: 1;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
`
const Login = styled.div`
    position: absolute;
    z-index: 1;
    width: 227px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 74px;
    top: 535px;
    cursor: pointer;
    text-decoration:none;
    

    p{
        color: #FFFFFF;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-decoration: none;
    }
`
const Navegar = styled(Link)`
    text-decoration: none;

`