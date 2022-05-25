import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import S from './style.module.scss';

const PlayerView = ({ videos }) => {


  videos.map((video) => {
    //console.log('video id', video.uid)
    return (
      <div className={S.Player}>
        <Stream controls src={video.uid} />
      </div>
    )
  })

}
export default PlayerView
