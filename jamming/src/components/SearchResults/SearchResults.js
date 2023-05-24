import React from 'react'
import Tracklist from '../Tracklist/Tracklist'

export default function SearchResults({searchResults, clickHandler}) {
  return (
    <div>
      <Tracklist songList={searchResults} clickHandler = {clickHandler}/>
    </div>
  )
}
