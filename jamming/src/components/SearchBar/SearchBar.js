import React, {useCallback, useState} from 'react'

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
    <input type='text' placeholder='Enter a song title' onChange={searchTypeHandler}/>
    <button onClick={search}>Search</button>
    </>
  )
}
