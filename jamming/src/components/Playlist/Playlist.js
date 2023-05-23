import React from 'react'
import Track from '../Track/Track'

export default function Playlist({chosenSongs, clickHandler, typeHandler, submitHandler, playlistName}) {
  return (
    <div className='playlist'>
      <label htmlFor='playlistName' display='none'></label>
      <input type='text' onChange={typeHandler} id='playlistName' value={playlistName}/>
      {chosenSongs.map(song => {
        return(
          <div className='selectedTrack' id={song.uri} key={'p'+song.uri}>
            <Track songName={song.songName} artist={song.artist} album={song.album} className='track'/>
            <b onClick={clickHandler}>-</b>
          </div>
        )
        })}
      <button onClick={submitHandler}>Save Playlist</button>
    </div>
  )
}
