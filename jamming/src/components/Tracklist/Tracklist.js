import React from 'react'
import Track from '../Track/Track'


export default function Tracklist({songList}) {
  return (
    <>
    {songList.map(song => 
      <Track songName={song.songName} artist={song.artist} album={song.album} className='track'/>)
      }
    </>
  )
}
