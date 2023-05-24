import React from 'react';
import Track from '../Track/Track';

export default function Playlist({playlistTracks, clickHandler, saveHandler, nameInputHandler, playlistName}) {

  const typeHandler = (e) => {
    nameInputHandler(e.target.value)
  }

  return (
    <div className='playlist'>
      <label htmlFor='playlistName' display='none'></label>
      <input type='text' onChange={typeHandler} id='playlistName' value={playlistName}/>
      {playlistTracks.map(song => {
        return(
          <div className='selectedTrack' id={song.uri} key={'p'+song.uri}>
            <Track songName={song.songName} artist={song.artist} album={song.album} className='track'/>
            <b onClick={clickHandler}>-</b>
          </div>
        )
        })}
      <button onClick={saveHandler}>Save Playlist</button>
    </div>
  )
}
