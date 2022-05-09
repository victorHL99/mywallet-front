import React, {useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


import styled from "styled-components";

import UsuarioContext from "../../context/UsuarioContext";
import IconeSair from "../../assets/img/IconeSair.png";
import Entrada from "../../assets/img/Entrada.png";
import Saida from "../../assets/img/Saida.png";


export default function PaginaPrincipal() {
    const {user, setUser, dados, setDados} = React.useContext(UsuarioContext);

    const navegar = useNavigate();

    useEffect(() => {
        const config ={
            headers: {Authorization: `Bearer ${user.token}`}
        };
        
        const URL_DADOS = "http://localhost:5000/paginaPrincipal";

        const promise = axios.get(URL_DADOS, config);
        promise.then((response) => {
            const {data} = response;
            setUser({...data, token: user.token});
            console.log(response.data)
            setDados(data);
        });
        promise.catch((error) => {
            console.log(error.response);
        })
    }, []);
    
    if(dados === null){
        return (
            <Main>
                <Titulo><p>Olá, Amigo</p></Titulo>
                <ButtonSair src={IconeSair}/>
                <TelaRegistros>
    
                </TelaRegistros>
                <NovaEntrada onClick={()=> {navegar("/novaEntrada");}}><img src={Entrada} alt="" /><p>Nova Entrada</p></NovaEntrada>
                <NovaSaida onClick={()=> {navegar("/novaSaida");}}><img src={Saida} alt="" /><p>Nova Saída</p></NovaSaida>
            </Main>
        )
        

    } else {
        console.log(user.usuario);
        return (
            <Main>
                <Titulo><p>Olá, {dados.usuario.nome} </p></Titulo>
                <ButtonSair src={IconeSair}/>
                <TelaRegistros>
    
                </TelaRegistros>
                <NovaEntrada onClick={()=> {navegar("/novaEntrada");}}><img src={Entrada} alt="" /><p>Nova Entrada</p></NovaEntrada>
                <NovaSaida onClick={()=> {navegar("/novaSaida");}}><img src={Saida} alt="" /><p>Nova Saída</p></NovaSaida>
            </Main>
        )
    }
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

const ButtonSair = styled.img`
    position: absolute;
    z-index: 1;
    width: 23px;
    height: 24px;
    top: 28px;
    left: 328px;
    cursor: pointer;
`

const TelaRegistros = styled.div`
    background-color: #FFFFFF;
    position: absolute;
    z-index: 1;
    width: 326px;
    height:446px;
    top: 78px;
    left: 25px;
    border-radius: 5px;

`

const NovaEntrada = styled.div`
    background-color: #A328D6;
    position: absolute;
    z-index: 1;
    width:155px;
    height:114px;
    top: 537px;
    left:25px;
    border-radius: 5px;
    cursor: pointer;

    img{
        position: absolute;
        width:25px;
        height:25px;
        top: 9px;
        left: 8px;
    }

    p{
        position: absolute;
        width:64px;
        height:40px;
        left:10px;
        top:55px;
        font-family:'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

`

const NovaSaida = styled.div`
    background-color: #A328D6;
    position: absolute;
    z-index: 1;
    width:156px;
    height:114px;
    top: 537px;
    left:195px;
    border-radius: 5px;
    cursor: pointer;

    img{
        position: absolute;
        width:25px;
        height:25px;
        top: 9px;
        left: 8px;
    }

    p{
        position: absolute;
        width:64px;
        height:40px;
        left:10px;
        top:55px;
        font-family:'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

`