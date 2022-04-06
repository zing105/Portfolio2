import React from 'react';

import styles from './videoItem.module.css';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
const videoStyle = css`
    display: flex;
    align-items: center;
    margin-bottom:0.2em;
  
`


const Video_items = ({video: {snippet} }) => {


    return (
        <li css={videoStyle}>
          <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
        

            <div>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            
            </div>
        </li>
    );
};

export default Video_items;