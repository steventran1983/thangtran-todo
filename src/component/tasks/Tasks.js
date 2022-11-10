import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import toast from 'react-hot-toast'
import TaskItem from '../taskItem/TaskItem'
import "./tasks.css"
import { useGlobalContext } from '../../context/Context'
const Tasks = () => {
  const { editInfo } = useGlobalContext()
  console.log("usecontext start here")
  console.log(editInfo)

  const [tasks, setTasks] = useState([])
  const [newTask,setNewTask] = useState({})
  const [deleteTask,setDeleteTask] = useState(false)
  const [toggle,setToggle] = useState(false)


  const ref = useRef(null);

  const getTasks = async () =>{

    try{
      const {data} = await axios.get('/api/tasks/mytask')
      setTasks(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
		getTasks();
		console.log(tasks);
  }, [newTask,toggle]);



const hanleAddTodo = async (e) => {
  e.preventDefault()
  const newToDo = {
    title:e.target.newTask.value
  } 
  console.log(newTask)
  try{
    await axios.post('/api/tasks/', newToDo);
    setNewTask(newToDo);
    toast.success("Task adding completed")
    
    ref.current.value = ""
    ref.current.focus()
  }catch(err){
    console.log(err);
    toast.error("cannot add task")
  }
};

/* {

  This function use for delete task
}*/
const handleDeleteTask = async (taskId) => {
  try{
    await axios.delete(`/api/tasks/${taskId}`);
    // setDeleteTask(!deleteTask)
    setTasks(tasks.filter((task) => task._id !== taskId))
    toast.success("task deleted")
  }catch(err){
    console.log(err);
	  toast.error('cannot add task');
  }
}


  
const handleEditTask = async (e) => {
  try {
    const editValue = {
      title: e.target.newTask.value,
      completed:false
    }
    await axios.put(`/api/tasks/edit/${editInfo.id}`, editValue)
    toast.success("Update task content completed")
    setToggle(!toggle)
  } catch(err) {
    toast.error('cannot add task');
  }
}


  return (
		<section className="task">
			<div className="task-container">
				<div className="task-title">
					<h2>What's the Plan For Today</h2>
				</div>
				<form onSubmit={editInfo.toggle ? hanleAddTodo : handleEditTask} className="task-form" >
					<label htmlFor="newtask" className="task-newtask">
            <input
              className='task-input'
              ref={ref}
              type="text"
              name="newTask"
              placeholder={ editInfo.toggle ? "Add toDo" : editInfo.taskContent}
            />
            <button type="submit" className="task-form-button">
						{`${editInfo.toggle ? "Add Todo":"Edit Todo"}`}
					</button>
					</label>
					
				</form>
				<div className="task-item">
					<TaskItem props={{tasks, handleDeleteTask}} />
				</div>
			</div>
		</section>
  );
}

export default Tasks