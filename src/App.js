import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 6th at 1:30PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 3:30PM',
      reminder: false,
    }
  ])

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(
      tasks.map((task) =>
       task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'
      }
    </div>
  );
}

export default App;
