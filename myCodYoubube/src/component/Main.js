import React, { useState } from 'react';
import Search from './Search';
import VidoList from './VidoList';
import styled from "styled-components";


const SetHeader = styled.header`
    position: relative ;
    display:flex ;
    justify-content: center;
    align-items:center;
    width:100%;
    height:50px;
    background-color:#000000;
    margin:0 auto;
`

const Logo = styled.div` 
    display: flex;
    align-items: center;
    margin-right: 0.5em ;
`


const Image = styled.img`
   
    left:0;
    padding-left:1rem;
   
`
const YouTitle = styled.h1` 
    
    margin-left: 0.5em ;
    color:#ffffff ;
    font-size:2em ;
    font-weight:700 ;
    @media screen and (max-width: 850px) {
        font-size:1em ;
    }
`

const Main = () => {
    const [data,setData] = useState([]) //api 데이터


    return (
        <>
        <SetHeader>

            <Logo>
            <Image src="./images/logo.png" alt="이미지"/>
            <YouTitle>Youtube</YouTitle>
            </Logo>
        <Search setData={setData}/>
        
        </SetHeader>

        <VidoList data={data}/>
       </>
    );
};

export default Main;