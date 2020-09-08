import React from 'react'
import './Todo.css';

function Todo({title}) {
  return (
    <div className="todo">
      <h2 className="todo__header">{title}</h2>
    </div>
  )
}

export default Todo;
