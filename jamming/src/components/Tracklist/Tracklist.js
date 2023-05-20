import React from 'react'
import Track from '../Track/Track'


export default function Tracklist({songList, clickHandler}) {
  let songId = 0
  return (
    <div>
      {songList.map(song => {
        songId++
        return (
        <div className='trackSearched'>
        <Track songName={song.songName} artist={song.artist} album={song.album} className='track' id={songId} 
        key={songId}/>
        <b onClick={clickHandler}>+</b>
        </div>
        );
      })
      }
    </div>
  )
}
