import React from 'react'
import { FaTimes, FaRegBell } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <h4>
        {task.text}
        <div className="task-icons">
          <FaTimes style={{color: 'red'}}
            onClick={() => onDelete(task.id)} />
          <FaRegBell onClick={() => onToggle(task.id)} />
        </div>
      </h4>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
