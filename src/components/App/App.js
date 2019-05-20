import React, { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader'
import SearchTodo from '../SearchTodo/SearchTodo'
import Filter from '../Filter/Filter'
import ToDoList from '../ToDoList/ToDoList'
import ToDoInput from '../ToDoInput/ToDoInput'
import './App.sass'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [active, setActive] = useState(false)
  const [done, setDone] = useState(false)

  const toogleActive = () => {
      setActive(true)
      setDone(false)
      console.log(active)
  }

  const toogleDone = () => {
    setActive(false)
    setDone(true)
  }

  const toogleAll = () => {
    setActive(false)
    setDone(false)
  }

  const addItem = (name) => {
    const newItem = {
      name,
      done: false,
      important: false,
      id: counter
    }
    setCounter(counter + 1)
    setData([...data, newItem])
  }

  const removeItem = (id) => {
    setData(data.filter(el => el.id !== id))
  }

  const onToogleImportant = (id) => {
    const idx = data.findIndex(el => el.id === id)
    const oldItem = data[idx]
    const newItem = {...oldItem,
      important: !oldItem.important
    }
    const newArray = [
      ...data.slice(0, idx),
      newItem,
      ...data.slice(idx + 1)
    ]

    setData(newArray)
  }

  const onToogleDone = (id) => {
    const idx = data.findIndex(el => el.id === id)
    const oldItem = data[idx]
    const newItem = {...oldItem,
      done: !oldItem.done
    }
    const newArray = [
      ...data.slice(0, idx),
      newItem,
      ...data.slice(idx + 1)
    ]

    setData(newArray)
  }

  const onSearch = (value) => {
    setSearch(value)
  }

  return (
    <main className="app-wrapper">
      <AppHeader data={data.length} done={data.filter(el => el.done).length}/>
      <div className="search-filter-flex">
        <SearchTodo onSearch={onSearch}/>
        <Filter toogleDone={toogleDone} toogleActive={toogleActive} toogleAll={toogleAll}/>
      </div>
      <ToDoList allItems={data} onToogleDone={onToogleDone} onToogleImportant={onToogleImportant} removeItem={removeItem} search={search} active={active} done={done}/>
      <ToDoInput addItem={addItem} />
    </main>
  )
}

export default App
