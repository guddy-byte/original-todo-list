import React, {useState, useEffect} from 'react'
import './index.css'
import TaskForm from './TaskForm'
import Task from './Task'


function App() {
  const [tasks, setTasks] = useState([]);
   useEffect(() => {
    if (tasks.length === 0) return;  //
   localStorage.setItem('tasks', JSON.stringify(tasks))
   }, [tasks]);

   useEffect(() => {
   const tasks = JSON.parse(localStorage.getItem('tasks'));
   setTasks(tasks);
   }, [])



  function addTask(name){
    setTasks(prev => {
      return [...prev, {name: name,done:false}]
    });
  }


     function removeTask (indexToRemove){
         setTasks(prev => {
           return prev.filter((taskObject,index : number) => index !== indexToRemove);
         });
     }


  function updateTaskDone(taskIndex, newDone){
     setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done= newDone;
      return newTasks;
     });
  }

  function renameTask(index,newName){
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }

  return (
    <main>
      <TaskForm onAdd={addTask} /> 

      {tasks.map((task,index: number) => (
        <Task {...task} 
        onRename={newName => renameTask(index,newName )}
          onTrash={() => removeTask(index)}
           onToggle={done => updateTaskDone(index,done) }/>
  ))}
    </main>
  );
}

export default App
