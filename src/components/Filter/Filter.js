import React, { useState } from 'react';
import './Filter.sass'

const Filter = ({toogleDone, toogleActive, toogleAll}) => {
  const [toogle, setToogle] = useState(0)

  const onToogleAll = () => {
    toogleAll();
    setToogle(0)
  }

  const onToogleActive = () => {
    toogleActive();
    setToogle(1)
  }

  const onToogleDone = () => {
    toogleDone();
    setToogle(2)
  }

  return (
    <div className="filter-wrapper">
      <button className={toogle === 0 ? 'filter-btn filter-btn__all active' : 'filter-btn filter-btn__all' } onClick={onToogleAll}>All</button>
      <button className={toogle === 1 ? 'filter-btn filter-btn__active active' : 'filter-btn filter-btn__active' } onClick={onToogleActive}>Active</button>
      <button className={toogle === 2 ? 'filter-btn filter-btn__done active' : 'filter-btn filter-btn__done' } onClick={onToogleDone}>Done</button>
    </div>
  )
}

export default Filter;
