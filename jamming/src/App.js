import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  const [songList, setSongList] = useState([{
    songName: 'Alive',
    artist: 'Pearl Jam',
    album: 'rearviewmirror'
  },
  {
    songName: 'Wicked Game',
    artist: 'Stone Sour',
    album: 'Come What(ever) May'
  }
]);

  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Tracklist songList={songList} />
      <Playlist />
    </div>
  );
}

export default App;
