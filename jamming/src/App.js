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
  let isLoggedIn = false;

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
      albumImage: selectedSong.querySelector('img').src,
      uri: songURI
    }
    if(playlistTracks.some(song => song.uri === songAdded.uri)) {
      return alert('This song was already added to the playlist');
    } else {
      setPlaylistTracks(playlist => [...playlist,songAdded]);
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

  const save = () => {
    const playlistURIS = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistURIS, playlistName);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    setSearchResults([]);
  }

  const nameInputHandler = input => {
    setPlaylistName(input);
  }

  const login = () => {
    Spotify.getToken()

  }

  const loggedInStatus = () => {
    const accessToken = window.location.href.match(/access_token=[^&]*/)
    const loginSuccesful = window.location.href.match(/login_succesful/)
    if(accessToken || loginSuccesful) {
      isLoggedIn = true;
    }
  }

  loggedInStatus();

  return (
    <div className="App">
      <h1 className='title'>Jamming</h1>
      {isLoggedIn ? <SearchBar onSearch={searchSongs}/> : <button className='login' onClick={login}>Login to begin</button>}
      <main className='main'>  
        {searchResults.length === 0 ? <></> : <SearchResults searchResults={searchResults} clickHandler={addTrack}/>}
        {playlistTracks.length === 0 ? <></> : <Playlist playlistTracks={playlistTracks} clickHandler={removeTrack} playlistName={playlistName} saveHandler={save} nameInputHandler={nameInputHandler}/>}
      </main>
    </div>
  );
}

export default App;
