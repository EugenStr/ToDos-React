import React from 'react';
import './AppHeader.sass'
import Counter from '../Counter/Counter'

const AppHeader = ({data, done}) => {
  return (
    <div className="header-wrapper">
      <h1 className="header-title">ToDos</h1>
      <Counter data={data} done={done}/>
    </div>
  )
}

export default AppHeader;
