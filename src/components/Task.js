import {FaTimes} from 'react-icons/fa'
import ProgressCircle from './ProgressCircle';

const Task = ({task, onDelete, onToggle, onAdd}) => {
  return <div className={`task ${task.important ? 'important' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
    <div className="task-top">
      <h3>{task.text} <FaTimes className='faTimes' onClick={()=>onDelete(task.id)} /></h3>
    </div>
      <p className='task-date'>{task.day}</p>
      <ProgressCircle progress={task.progress} radius={60} stroke={4} onAdd={onAdd}/>
  </div>;
};

export default Task;
