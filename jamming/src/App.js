import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <SearchResults/>
      <Playlist/>
    </div>
  );
}

export default App;
