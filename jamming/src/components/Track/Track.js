import React from 'react'
import './Track.css'

export default function Track(props) {
  return (
    <div className='track_info' id={props.id}>
      <h3 className='song_title'>{props.songName}</h3>
      <h4 className='artist'>{props.artist}</h4>
      <h5 className='album'>{props.album}</h5>
    </div>
  )
}
