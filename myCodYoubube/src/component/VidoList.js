import React,{memo, useMemo} from 'react';
import styled from "styled-components";
import VideoItem from './VideoItem';


const ListUl = styled.ul`
list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `


const VidoList = memo(({data,onVideoClick,selectedVideo}) => {



  return useMemo( ()=>
      <main>
        <ListUl>
          <VideoItem data={data} onVideoClick={onVideoClick} selectedVideo={selectedVideo}/>
        </ListUl>   
      </main>
  ,[data,onVideoClick,selectedVideo]);
});

export default VidoList;