import React, { useState,useEffect } from 'react';

import styled from '@emotion/styled'
import Video_list from './components/video_list/Video_list';

const App = () => {
  const [videos, setVideos] = useState([]);


  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD9hHo0bjEfpnBI4Pf8aD7pySkibaqFJBQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  },[])

  return (
    <Video_list videos={videos} />
  );
};

export default App;