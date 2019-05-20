import React from 'react';
import './ToDoItem.sass'

const ToDoItem = ({name, onToogleDone, done, important, removeItem, onToogleImportant, id}) => {
  let styleNames = 'item-name';
  if (done) {
    styleNames += ' done'
  }
  if (important) {
    styleNames += ' imp'
  }
  return (
    <div className='todo-item'>
      <span className={styleNames} onClick={() => onToogleDone(id)}>{name}</span>
      <div>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => removeItem(id)}><i className='fa fa-trash-o'/></button>
        <button type="button" className="btn btn-outline-success btn-sm"><i className='fa fa-exclamation' onClick={() => onToogleImportant(id)}/></button>
      </div>
    </div>

  )
}

export default ToDoItem;
