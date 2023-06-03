import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css'

export default function Tracklist({songList, clickHandler}) {
  return (
    <div>
      {songList.map(song => {
        return (
        <div className='searched_track' id={song.uri} key={song.uri}>
        <Track songName={song.name} artist={song.artist} album={song.album} className='track'/>
        <b onClick={clickHandler} className='add'>+</b>
        </div>
        );
      })
      }
    </div>
  )
}
