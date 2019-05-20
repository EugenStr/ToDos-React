import React from 'react';
import './Counter.sass'

const Counter = ({data, done}) => {
  const active = data - done;
  return <p className="counter-todo">{active} more to do, {done} done</p>
}

export default Counter;
