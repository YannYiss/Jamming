import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const songList = [{
    songName: 'Alive',
    artist: 'Pearl Jam',
    album: 'rearviewmirror',
    uri: 'dfsv5sd46f28a4sf6sd54f2ad42f6g4g'
  },
  {
    songName: 'Wicked Game',
    artist: 'Stone Sour',
    album: 'Come What(ever) May',
    uri: '6asdf42sxfh42df6h24df6g524d68g2s'
  }
];

  const [chosenSongs, setChosenSongs] = useState([]);

  const addTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0];
    const songAdded = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText,
      
    }
    setChosenSongs(songList => [...songList,songAdded]);
  };

  const removeTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0];
    const songToRemove = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText
    };
    setChosenSongs(songList => {
      const updatedArray = songList.filter((song) => {
        if (song.songName === songToRemove.songName && song.artist === songToRemove.artist && song.album === songToRemove.album) {
          return false
        } else {
          return true 
        }
      });
      return updatedArray
    });
  };

  const renamePlaylist = (e) => {
    const playlistName = e.target.value;
  };

  const savePlaylist = () => {
    console.log(chosenSongs)
    let songsURI = [];
    chosenSongs.map(song => songsURI.push(song.uri));
    console.log(songsURI)
    return songsURI;
  }

  return (
    <div className="App">
      <SearchBar />
      <SearchResults songList={songList} clickHandler={addTrack}/>
      <Playlist chosenSongs={chosenSongs} clickHandler={removeTrack} typeHandler={renamePlaylist} submitHandler={savePlaylist}/>
    </div>
  );
}

export default App;
