
import React, { memo, useState, useMemo, useCallback } from 'react';
import Search from './Search';
import VideoList from './VidoList';
import styled from "styled-components";
import Youtube from '../service/youtube';
import Videodetail from './video_detail/Video_detail';


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

const Content = styled.section` 
    display: flex ; 
`
const Detail = styled.div` 
    flex: 1 1 70%;
`
const List = styled.div` 
    flex: 1 1 30%;
`
    const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)

const Main = memo(() => {
    const [data,setData] = useState([]) //api 데이터

    const [apiMap,setApiMap]= useState(false) 
    // api 불러오는 상태 바꾸기 (viedo.id /video.id.videoId)

    const [selectedVideo,setSelectedVideo] = useState(false) //데이터받음

    const logoClick = () => {
        setSelectedVideo(false)
    }

    const [loading, setLoading] = useState(false); //로딩 화면 용


    const onVideoClick = useCallback((video) =>{ //클릭시 클릭된 데이터 정보를 받음
        setSelectedVideo(video)
        

    },[]);



    return (
        <>
        <SetHeader>
            <Logo onClick={logoClick}>
            <Image src="./images/logo.png" alt="이미지"/>
            <YouTitle>Youtube</YouTitle>
            </Logo>
                <Search setApiMap={setApiMap} setData={setData} youtube={youtube} setSelectedVideo={setSelectedVideo}  setLoading={setLoading}/>
        </SetHeader>

        {loading ? (<h1>로딩중...</h1>) : (
                    <Content>

                    {selectedVideo && (
                        <Detail>
                            <Videodetail video={selectedVideo} apiMap={apiMap}/>
                        </Detail>
                    )}
                    
                        <List> 
                        <VideoList data={data} onVideoClick={onVideoClick} selectedVideo={selectedVideo} />
                        </List>
                        
                    </Content>
        )}


       

        
       </>
    );
    });

export default Main;