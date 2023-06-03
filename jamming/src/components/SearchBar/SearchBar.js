import React, {useCallback, useState} from 'react';
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTypeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const search = useCallback(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);
  
  return (
    <>
    <input type='text' placeholder='Enter a song title' onChange={searchTypeHandler} className='search_field'/>
    <button onClick={search} className='search_button'>Search</button>
    </>
  )
}
