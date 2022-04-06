import React from 'react';
import VideoItems from '../video_items/Video_items';

const Video_list = ({videos}) => {
    return (
        <ul>
{videos.map(video => ( <VideoItems key={video.id} video={video}/>))}
        </ul>
    );
};

export default Video_list;