import React, {useState} from 'react';
import './ToDoInput.sass'


const ToDoInput = ({addItem, addActive}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      addItem(value)
      setValue('')
    }

  }

  return (
    <input type='text' placeholder="Create ToDo" className="todo-input" value={value} onChange={handleChange} onKeyPress={handleSubmit}/>
  )
}

export default ToDoInput
