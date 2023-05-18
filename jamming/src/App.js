import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const songList = [{
    songName: 'Alive',
    artist: 'Pearl Jam',
    album: 'rearviewmirror'
  },
  {
    songName: 'Wicked Game',
    artist: 'Stone Sour',
    album: 'Come What(ever) May'
  }
];

  const [chosenSongs, setChosenSongs] = useState([]);

  const addTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0]
    alert('hello');
    console.log(selectedSong)
    
  };

  return (
    <div className="App">
      <SearchBar />
      <SearchResults songList={songList} clickHandler={addTrack}/>
      <Playlist chosenSongs={chosenSongs}/>
    </div>
  );
}

export default App;
