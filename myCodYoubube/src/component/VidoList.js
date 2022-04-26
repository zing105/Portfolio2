import React,{useMemo} from 'react';
import styled from "styled-components";


const ListUl = styled.ul`
list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `


const Li = styled.li` 
    display: flex;
    flex-direction:  ${(props) => props.selectedVideo ? 'row' : 'column' };
    /* flex-direction:  ${(props) => props.selectedVideo === false ? 'column':'row' }; */
    flex:  ${(props) => props.selectedVideo ? '1 auto' : '2' };
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
`   


const VidoList = ({data,onVideoClick,selectedVideo,display}) => {



    return (
        <main>
          <ListUl>
            {data.map((item) => (
            <Li key={item.etag} selectedVideo={selectedVideo} onClick={() => onVideoClick(item)} >
              <img src={selectedVideo ? item.snippet.thumbnails.default.url : item.snippet.thumbnails.medium.url } alt="img"/>
              <ul>
              <LiChTitle>{item.snippet.channelTitle}</LiChTitle>
                <LiTitle>{item.snippet.title}</LiTitle>
              </ul>
               
            </Li>) )}

          </ListUl>   
        </main>
    );
};

export default VidoList;