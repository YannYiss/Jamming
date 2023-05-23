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
  const [playlist, setPlaylist] = useState([]);

  const searchSongs = useCallback((term) => {
    Spotify.search(term).then(setSongList);
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
    if(playlist.includes(songURI)) {
      alert('This song was already added to the playlist');
    } else {
      setPlaylist([...playlist, songURI]);
      setChosenSongs(songList => [...songList,songAdded]);
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
    const updatedAray = chosenSongs.filter(song => {
      if (song.uri === songToRemove.uri) {
        return false
      } else {
        return true 
      }
    });
    setChosenSongs(updatedAray);
    setPlaylist(updatedAray);
  };

  const renamePlaylist = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchSongs}/>
      <SearchResults songList={songList} clickHandler={addTrack}/>
      <Playlist chosenSongs={chosenSongs} clickHandler={removeTrack} typeHandler={renamePlaylist} playlistName={playlistName}/>
    </div>
  );
}

export default App;
