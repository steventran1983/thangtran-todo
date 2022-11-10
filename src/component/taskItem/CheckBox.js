import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useGlobalContext } from '../../context/Context';
const CheckBox = ({ task, handleDeleteTask }) => {
	const {toggleAddTodo} = useGlobalContext();
	const [checked, setChecked] = useState(task.completed);

	const handleChange = async () => {
		try {
			await axios.put(`/api/tasks/${task._id}`, {
				title:task.title,completed: !checked,
			});
			setChecked(!checked);
		} catch (err) {
			toast.error('cannot add task');
		}
	};

	console.log(checked);
	return (
		<div className="task-item2">
			<div className="task-checkbox">
				<input
					type="checkbox"
					checked={checked}
					onChange={handleChange}

				/>
			</div>
			<p className="task-title2">{task.title}</p>
			<p className="task-completed">{`${
				checked ? 'Completed' : 'Incompleted'
			}`}</p>
			<i
				class="bx bx-x-circle"
				onClick={() => handleDeleteTask(task._id)}
			></i>
			{checked ? (
				''
			) : (
				<i
					class="bx bx-edit-alt"
						onClick={() => toggleAddTodo({ title:task.title, id:task._id })}
				></i>
			)}
		</div>
	);
};

export default CheckBox;
