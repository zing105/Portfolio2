import React from 'react';
import Main from './component/Main';
import './component/reset.css'
import styled from "styled-components";


const MainCover = styled.div`
  text-align : center;
  width:80%;
  margin:0 auto ;
`

const App = () => {
  
  return (
    <MainCover>
    
      <Main/>
       
      
    </MainCover>
  );
};

export default App;