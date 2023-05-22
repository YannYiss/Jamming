import React from 'react'
import Track from '../Track/Track'


export default function Tracklist({songList, clickHandler}) {
  return (
    <div>
      {songList.map(song => {
        return (
        <div className='trackSearched' id={song.uri} key={song.uri}>
        <Track songName={song.name} album={song.album} className='track'/>
        <b onClick={clickHandler}>+</b>
        </div>
        );
      })
      }
    </div>
  )
}
