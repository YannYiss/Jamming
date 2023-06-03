import React from 'react'
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

export default function SearchResults({searchResults, clickHandler}) {
  return (
    <div className='search_results_list'>
      <Tracklist songList={searchResults} clickHandler = {clickHandler}/>
    </div>
  )
}
