import React from 'react'

export default function Track(props) {
  return (
    <div className='trackInfo' id={props.id}>
      <h3>{props.songName}</h3>
      <h4>{props.artist}</h4>
      <h5>{props.album}</h5>
    </div>
  )
}
