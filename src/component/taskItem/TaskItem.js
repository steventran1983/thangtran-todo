import React, { useState } from 'react'
import './taskitem.css'
import CheckBox from './CheckBox';

const TaskItem = ({ props }) => {
	
  const {tasks,handleDeleteTask} = props
	

	return (
		<div className="task-list">
			{tasks.map((task, index) => (
				<div key={ index}>

				<CheckBox task={task} handleDeleteTask = {handleDeleteTask}/>
				</div>
			))}
		</div>
	);
};


export default TaskItem