import style from './VideoLoop.module.scss';
import React from 'react';

import video from '../../../public/video/websiteloop.mp4'

export default function VideoLoop() {
    return (
        <div className={style.videoLoop}>
            <iframe
                src="https://vimeo.com/943091596?share=copy"
                width="100%"
                height="200"
                frameborder="0"
                allow="autoplay"
            ></iframe>
        </div>
    )
}