import React, {useMemo} from 'react';
import styled from "styled-components";


const Section = styled.section` 
    padding: 0.2em ;
`
const Pre = styled.section`
    white-space:pre-wrap ;
`

const Video_detail = ({video,apiMap}) => {

    
    return (
        <Section>
      <iframe title={video.snippet.title} type="text/html" width="100%" height="500px"
src={`https://www.youtube.com/embed/${apiMap ? video.id.videoId : video.id}`}
></iframe>

        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <Pre>{video.snippet.description}</Pre>
        </Section>
     
    );
};

export default Video_detail;