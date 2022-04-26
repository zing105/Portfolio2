import React, {useMemo} from 'react';
import styled from "styled-components";


const Section = styled.section` 

`

const Video_detail = ({video,apiMap}) => {

    
    return (
        <Section>
      <iframe title={video.snippet.title} type="text/html" width="100%" height="500px"
src={`https://www.youtube.com/embed/${apiMap ? video.id.videoId : video.id}`}
></iframe>
        {console.log(video.id)}
        </Section>
     
    );
};

export default Video_detail;