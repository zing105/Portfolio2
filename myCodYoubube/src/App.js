import React from 'react';
import Main from './component/Main';
import './component/reset.css'
import styled from "styled-components";
//소스트리 테스트용 텍스트
const MainCover = styled.div`
  text-align : center;
  width:80%;
  margin:0 auto ;
  @media screen and (max-width: 800px) {
        width:100%;
    }
`

const App = () => {
  
  return (
    <MainCover>
    
      <Main/>
       
      
    </MainCover>
  );
};

export default App;