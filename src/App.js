import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    []
)

//add task
function addTask(task){
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {...task, id}
  setTasks([...tasks, newTask])
}

//delete task
function deleteTask(id){
  //filter thru and show tasks that arent equal to the id that was clicked on
  //essentially task deleting from ui
  setTasks(tasks.filter(task=>task.id !== id))
}

//toggle important
function toggleImportant(id){
  setTasks(tasks.map((task) => task.id === id ? { ...task, important: !task.important } : task))
}


  return (
    <div className="container">
      <Header title='Tasker' onAdd={()=>setShowAddTask(!showAddTask)} showAddForm={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      
      <div className="progress-header">
      <p className="progress-tasks-left">{tasks.length} tasks left</p>
    </div>
      <div className="tasks-container">
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleImportant} /> : <p className='no-task-text'>Add a task</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
