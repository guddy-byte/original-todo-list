import React, {useState} from 'react'

function TaskForm({onAdd}) {
const [taskName, setTaskName] = useState('')

     function handleSubmit(ev) {
      ev.preventDefault();
      onAdd(taskName); //makes the task appear in the array of lists
      setTaskName('')  //empties the display screen after text is inserted
     }
     
  return (
    <form onSubmit= {handleSubmit}>
      <button>+</button>
      <input 
      type='text' 
      placeholder='Next task...'
      value={taskName}
      onChange={e => setTaskName(e.target.value)} />
  </form>
  )
  }

export default TaskForm



