import React from 'react'
import Button from '../Button/Button'
import Track from '../Track/Track'

export default function Playlist({chosenSongs, clickHandler, typeHandler, submitHandler}) {
  return (
    <div className='playlist'>
      <label htmlFor='playlistName' display='none'></label>
      <input type='text' onChange={typeHandler} id='playlistName'/>
      {chosenSongs.map(song => {
        return(
          <div className='selectedTrack'>
            <Track songName={song.songName} artist={song.artist} album={song.album} className='track'/>
            <b onClick={clickHandler}>-</b>
          </div>
        )
        })}
      <Button text='Save Playlist' submitHandler={submitHandler}/>
    </div>
  )
}
