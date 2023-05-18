import React from 'react'
import Track from '../Track/Track'


export default function Tracklist({songList, clickHandler}) {
  let songId = 0
  return (
    <div>
      {songList.map(song => {
        return (
        <div className='trackSearched'>
        <Track songName={song.songName} artist={song.artist} album={song.album} className='track' id={songId+=1}/>
        <b onClick={clickHandler}>+</b>
        </div>
        );
      })
      }
    </div>
  )
}
