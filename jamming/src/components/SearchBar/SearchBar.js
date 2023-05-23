import React, {useCallback, useState} from 'react'

export default function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTypeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const search = useCallback((searchTerm) => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);
  
  return (
    <>
    <input type='text' onChange={searchTypeHandler}/>
    <button onClick={search}>Search</button>
    </>
  )
}
