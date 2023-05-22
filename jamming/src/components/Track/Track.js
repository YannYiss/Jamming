import React from 'react'

export default function Track(props) {
  return (
    <div className='trackInfo' id={props.id}>
      <h3>{props.name}</h3>
      <h5>{props.album}</h5>
    </div>
  )
}
