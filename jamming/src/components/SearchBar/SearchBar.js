import React from 'react'
import Button from '../Button/Button'

export default function SearchBar({onSearch}) {
  return (
    <>
    <input type='text'/>
    <Button text='Search' submitHandler={onSearch}/>
    </>
  )
}
