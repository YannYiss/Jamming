import React, {useCallback, useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './Utils/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]) 
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const playlistURIS = []

  const searchSongs = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, [])

  const addTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0];
    const songURI = e.target.parentElement.id;
    const songAdded = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText,
      uri: songURI
    }
    if(playlistTracks.some(song => song.uri === songAdded.uri)) {
      return alert('This song was already added to the playlist');
    } else {
      setPlaylistTracks(songList => [...songList,songAdded]);
    }
  };

  const removeTrack = (e) => {
    const selectedSong = e.target.parentElement.children[0];
    const songURI = e.target.parentElement.id;
    const songToRemove = {
      songName: selectedSong.querySelector('h3').innerText,
      artist: selectedSong.querySelector('h4').innerText,
      album: selectedSong.querySelector('h5').innerText,
      uri: songURI
    };
    const updatedAray = playlistTracks.filter(song => {
      if (song.uri === songToRemove.uri) {
        return false
      } else {
        return true 
      }
    });
    setPlaylistTracks(updatedAray);
  };

  const save = (playlist, playlistName) => {
    
    console.log(playlist, playlistName)
    Spotify.savePlaylist(playlist, playlistName);
  }

  const nameInputHandler = input => {
    setPlaylistName(input);
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchSongs}/>
      <SearchResults searchResults={searchResults} clickHandler={addTrack}/>
      <Playlist playlistTracks={playlistTracks} clickHandler={removeTrack} playlistURIS={playlistURIS} playlistName={playlistName} saveHandler={save} nameInputHandler={nameInputHandler}/>
    </div>
  );
}

export default App;
