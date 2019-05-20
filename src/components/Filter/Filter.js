import React, { useState } from 'react';
import './Filter.sass'

const Filter = ({toogleDone, toogleActive, toogleAll}) => {
  const [toogle, setToogle] = useState(0)

  const onToogle = (func, toogleIndex) => {
    func();
    setToogle(toogleIndex)
  }

  return (
    <div className="filter-wrapper">
      <button className={toogle === 0 ? 'filter-btn filter-btn__all active' : 'filter-btn filter-btn__all' } onClick={() => onToogle(toogleAll, 0)}>All</button>
      <button className={toogle === 1 ? 'filter-btn filter-btn__active active' : 'filter-btn filter-btn__active' } onClick={() => onToogle(toogleActive, 1)}>Active</button>
      <button className={toogle === 2 ? 'filter-btn filter-btn__done active' : 'filter-btn filter-btn__done' } onClick={() => onToogle(toogleDone, 2)}>Done</button>
    </div>
  )
}

export default Filter;
