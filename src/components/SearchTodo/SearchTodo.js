import React, { useState } from 'react';
import './SearchTodo.sass'

const SearchTodo = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const Search = (e) => {
      setValue(e.target.value)
      onSearch(e.target.value)
  }

  return <input className="search-todo" type="text" placeholder="Search" onChange={Search} value={value}/>
}

export default SearchTodo;
