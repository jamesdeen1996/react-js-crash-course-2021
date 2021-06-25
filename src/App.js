import { useState } from "react" 
import { FaTrashAlt } from "react-icons/fa"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
])


  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(
      tasks.map((task) => task.id === id ? 
      { ...task, reminder: !task.reminder } 
      : 
      task
      )
    )
  }


  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} />
      ) : (
        'No Task To Show'
      )}
    </div>
  );
}

  //This is example of Using a Class not a Components
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }


//CSS IN JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }



export default App;
