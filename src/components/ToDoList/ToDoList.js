import React from 'react';
import './ToDoList.sass'
import ToDoItem from '../ToDoItem/ToDoItem'
const ToDoList = ({allItems, onToogleDone, removeItem, onToogleImportant, search, active, done}) => {



  const mapping = (arr) => {
    return arr.map(el => {
      return <li key ={el.id}><ToDoItem name={el.name}
                                          onToogleDone={onToogleDone}
                                          done={el.done}
                                          id={el.id}
                                          important={el.important}
                                          removeItem={removeItem}
                                          onToogleImportant={onToogleImportant}
                                /></li>
    })
  }

  let renderIt = allItems

  if (search) {
    const searchFilter = allItems.filter(el => el.name.includes(search))
    renderIt = searchFilter
  }
  if (active) {
    renderIt = renderIt.filter(el => el.done === false)
  }
  if (done) {
    renderIt = renderIt.filter(el => el.done === true)
  }
  return (
    <ul className="todo-list">
      {mapping(renderIt)}
    </ul>
  )
}

export default ToDoList;
