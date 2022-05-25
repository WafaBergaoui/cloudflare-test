import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import S from './style.module.scss';

const PlayerView = () => {

  //const videoID = videoId
  const videoID = '548a1762f17f8ea1cda8344e0e48de7a';

  // const getVideosId = () => {
  //   videos.map((video) => {return video.uid});
  // }

  // videos.map((video) => {
  //   console.log(video.uid);
    return (
      <div className={S.Player}>
        <Stream controls src={videoID}/>
      </div>
    )
  //})
  
}
export default PlayerView
