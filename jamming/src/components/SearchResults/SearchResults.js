import React from 'react'
import Tracklist from '../Tracklist/Tracklist'

export default function SearchResults({songList, clickHandler}) {
  return (
    <div>
      <Tracklist songList={songList} clickHandler = {clickHandler}/>
    </div>
  )
}
