import React, {useCallback, useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './Utils/Spotify';

function App() {
  const [songList, setSongList] = useState([]) 
  const [chosenSongs, setChosenSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState(['New Playlist']);

  const searchSongs = useCallback((term) => {
    Spotify.search(term).then(setSongList);
  }, [])

  const addTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0];
    const songAdded = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText,
      uri: e.target.parentElement.id
    }
    setChosenSongs(songList => [...songList,songAdded]);
  };

  const removeTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0];
    const songToRemove = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText,
      uri: e.target.parentElement.id
    };
    setChosenSongs(songList => {
      const updatedArray = songList.filter((song) => {
        if (song.uri === songToRemove.uri) {
          return false
        } else {
          return true 
        }
      });
      return updatedArray
    });
  };

  const renamePlaylist = (e) => {
    setPlaylistName(e.target.value);
  };

  const savePlaylist = () => {
    let songsURI = [];
    chosenSongs.map(song => songsURI.push(song.uri));
    console.log(songsURI);
    return songsURI;
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchSongs}/>
      <SearchResults songList={songList} clickHandler={addTrack}/>
      <Playlist chosenSongs={chosenSongs} clickHandler={removeTrack} typeHandler={renamePlaylist} submitHandler={savePlaylist} playlistName={playlistName}/>
    </div>
  );
}

export default App;
