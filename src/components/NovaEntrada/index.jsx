import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";


export default function NovaEntrada() {

    return (
        <Main>
            <Titulo><p>Nova entrada</p></Titulo>
            <Input type="text" placeholder="Valor"/>
            <Input type="text" placeholder="Descrição"/>
            <Navegar to="/paginaPrincipal">
                <ButtonSalvar>
                    <p>Salvar entrada</p>
                </ButtonSalvar>
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
const Titulo = styled.div`
    position: absolute;
    z-index: 1;
    left: 24px;
    display: flex;
    
    p {
        font-family:'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`

const Input = styled.input`
    position: relative;
    z-index: 1;
    width: 326px;
    height: 58px;
    top: 96px;
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
        width: 92px;
        height: 23px;
        left: 15px;
        font-family:'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`

const ButtonSalvar = styled.button`
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
    top: 245px;
    left:25px;
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

const Navegar = styled(Link)`
    text-decoration: none;

`