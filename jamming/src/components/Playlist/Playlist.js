import React from 'react'
import Button from '../Button/Button'
import Track from '../Track/Track'

export default function Playlist({chosenSongs}) {
  return (
    <>
    <input type='text'/>
    {chosenSongs.map(song => {
      return(
        <div className='selectedTrack'>
          <Track songName={song.songName} artist={song.artist} album={song.album} className='track'/>
          <b>-</b>
        </div>
      )
      })}
    <Button/>
    </>
  )
}
