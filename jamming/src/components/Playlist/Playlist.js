import React from 'react';
import Track from '../Track/Track';
import './Playlist.css'

export default function Playlist({playlistTracks, clickHandler, saveHandler, nameInputHandler, playlistName}) {

  const typeHandler = (e) => {
    nameInputHandler(e.target.value)
  }

  return (
    <div className='playlist'>
      <label htmlFor='playlistName' display='none'></label>
      <input type='text' onChange={typeHandler} id='playlistName' value={playlistName} className='playlist_name'/>
      {playlistTracks.map(song => {
        return(
          <div className='selected_track' id={song.uri} key={'p'+song.uri}>
            <Track songName={song.songName} artist={song.artist} album={song.album} className='track'/>
            <b onClick={clickHandler} className='remove'>-</b>
          </div>
        )
        })}
      <button onClick={saveHandler}>Save Playlist</button>
    </div>
  )
}
