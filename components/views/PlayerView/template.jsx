import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import S from './style.module.scss';

const PlayerView = ({ videos }) => {

  //const videoID = videoId
  const videoID = '548a1762f17f8ea1cda8344e0e48de7a';


  videos.map((video) => {
    console.log('video id', video.uid)
    return (
      <div className={S.Player}>
        
        <Stream controls src={video.uid} />
        {/* <Stream controls src={videos[0].uid} />
        <Stream controls src={videos[1].uid} />
        <Stream controls src={videos[2].uid} />
        <Stream controls src={videos[3].uid} /> */}
      </div>
    )
  })
  
}
export default PlayerView
