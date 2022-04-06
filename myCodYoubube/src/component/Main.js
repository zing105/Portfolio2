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



const Image = styled.img`
    position: absolute;
    left:0;
    padding-left:2%;
   
`

const Main = () => {
    const [data,setData] = useState([]) //api 데이터


    return (
        <>
        <SetHeader>
            <Image src="./images/logo.png" alt="이미지"/>
        <Search setData={setData}/>
        </SetHeader>

        <VidoList data={data}/>
       </>
    );
};

export default Main;