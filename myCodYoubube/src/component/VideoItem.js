import React, { memo, useMemo } from 'react';
import styled from "styled-components";




console.log("아이템")
const VideoItem = memo(({data,onVideoClick,selectedVideo}) => {
    
    return useMemo( ()=>
        <>
           {data.map((item) => (
          <Li key={item.etag} selectedVideo={selectedVideo} onClick={() => onVideoClick(item)} >
            <img src={selectedVideo ? item.snippet.thumbnails.default.url : item.snippet.thumbnails.medium.url } alt="img"/>
            <ul>
            <LiChTitle>{item.snippet.channelTitle}</LiChTitle>
              <LiTitle>{item.snippet.title}</LiTitle>
            </ul>
             
          </Li>) )}   
        </>
       ,[data,onVideoClick,selectedVideo] 
    );
    
});

const Li =  styled.li` 
    display: flex;
    flex-direction:  ${(props) => props.selectedVideo ? 'row' : 'column' };
    /* flex-direction:  ${(props) => props.selectedVideo === false ? 'column':'row' }; */
    flex:  ${(props) => props.selectedVideo ? '1 100%' : '2' };
    transition: transform 250ms ease-in ;
    padding: 0.2em;
    box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  &:hover{
    transform: scale(1.02) ;
    cursor: pointer;
  }
`

const LiTitle = styled.li`
  font-size:1rem ;
  margin: 10px ;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 800px) {
      text-align:left ;
    }
`   

const LiChTitle = styled.li`
  font-size:1.2em ;
  font-weight: 700 ;
  margin: 10px ;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 800px) {
      text-align:left ;
    }
  
`   

export default VideoItem;