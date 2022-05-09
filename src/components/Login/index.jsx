import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import styled from "styled-components";


import Loading from "../Loading/Loading";
import UsuarioContext from "../../context/UsuarioContext";

export default function Login () {
    const [CarregarLogin, setCarregarLogin] = React.useState("Entrar");
    const [email , setEmail] = React.useState("");
    const [senha , setSenha] = React.useState("");
    const [ativarBotao, setAtivarBotao] = React.useState(false);
    const {setUser} = React.useContext(UsuarioContext);

    const navegar = useNavigate();

    async function tentarLogin() {
        
        setCarregarLogin(<Loading/>);
        const URL_LOGIN = "http://localhost:5000/";
        const promise = axios.post(URL_LOGIN, {
            email,
            senha
        });
        promise.then((response) => {
            const {data} = response;
            setUser({token: data});
            navegar("/paginaPrincipal")
        });
        promise.catch((error) => {
            alert("Dados Inválidos, Preencha Novamente!")
            setAtivarBotao(false);
            setCarregarLogin("Entrar");
        })
    

    }
    return(
        <Main>
            <Logo>MyWallet</Logo>
            <Input type="text" placeholder="E-mail" disable={ativarBotao} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" placeholder="Senha" disable={ativarBotao} value={senha} onChange={(e)=>setSenha(e.target.value)}/>
            <Button onClick={tentarLogin}><p>{CarregarLogin}</p></Button>
            <Navegar to="/registrar" >
                <Cadastrar>
                    <p>Primeira vez? Cadastre-se</p>
                </Cadastrar>
            </Navegar>
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
    top: 159px;
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
    top: 233px;
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
        width: 60px;
        height: 23px;
        left: 15px;
        font-family:'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`

const Button = styled.button`
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
    left:23px;
    top: 383px;
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

const Cadastrar = styled.div`
    color: #FFFFFF;
    position: absolute;
    z-index: 1;
    width: 191px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 92px;
    top: 460px;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

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
