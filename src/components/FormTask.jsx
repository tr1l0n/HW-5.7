import React from 'react'
export const FormTask = ({ handleTask }) => {
  return (
      <form onSubmit={handleTask}>
          <input type="text" placeholder='Enter task' name='text' />
          <button>Add task</button>
    </form>
  )
}

