import {useState} from 'react';
import {FaPlus} from 'react-icons/fa'


const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [progress,setProgress] = useState('')
    const [important,setImportant] = useState(false)

    function onSubmit(e){
        e.preventDefault()

        if(!text){
            alert('Please add task')
            return
        }

        onAdd({text,day,progress,important})
        console.log(text,day,progress,important)

        setText('')
        setDay('')
        setProgress('')
        setImportant(false)
    }

  return (
      <form className='add-task-form' onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
              <input type="text" placeholder='Add task' value={text} onChange={(e)=> setText(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Day & Time</label>
              <input type="text" placeholder='Add day & time' value={day} onChange={(e)=>setDay(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Progress completed</label>
              <input type="text" placeholder='Add 0-100' value={progress} progress={progress} onChange={(e)=>setProgress(e.target.value)} />

              <label>Set Important</label>
              <input type="checkbox" checked={important} value={important} onChange={(e)=>setImportant(e.currentTarget.checked)} />
          </div>

          <input className='btn' type="submit" value={<FaPlus />} />

      </form>

  )
};

export default AddTask;
