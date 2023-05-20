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
    const selectedSong = e.target.parentElement.children[0];
    const songAdded = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText
    }
    setChosenSongs(songList => [...songList,songAdded]);
  };

  const removeTrack = (e) => {
    const selectedSong = e.target.parentElement;
    selectedSong.parentNode.removeChild(selectedSong);
  }

  return (
    <div className="App">
      <SearchBar />
      <SearchResults songList={songList} clickHandler={addTrack}/>
      <Playlist chosenSongs={chosenSongs} clickHandler={removeTrack}/>
    </div>
  );
}

export default App;
