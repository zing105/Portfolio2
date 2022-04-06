import React from 'react';
import styled from "styled-components";

const Main = styled.main`

`
const ListUl = styled.ul`
list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `
const Li = styled.li` 
    display: flex;
    flex-direction: column;
    flex: 2;

`

const LiTitle = styled.p`
  font-size:1.2em ;
  margin: 10px ;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`   

const VidoList = ({data}) => {
    return (
        <Main>
          <ListUl>
        {data.map((item,index) => (<Li key={index}><img src={item.snippet.thumbnails.medium.url} alt="img"/>
        <LiTitle>{item.snippet.title}</LiTitle>
        
        </Li>) )}
          </ListUl>   
        </Main>
    );
};

export default VidoList;