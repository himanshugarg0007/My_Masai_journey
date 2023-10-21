import { useState } from 'react'
import './App.css'

function App() {
  const [taskName, taskUpdater] = useState("");
  const [taskarr, arrUpdater] = useState([]);
function inp(e){
  taskUpdater(e.target.value);
}
function addTask(){
  let newtask = {
    id : taskName +Math.random,
    title : taskName,
    status : false,
  }
  let newArr = [...taskarr, newtask];
  arrUpdater(newArr);
}
function del(taskId){
  let newlist = taskarr.filter((task)=>taskId != task.id);
  arrUpdater(newlist);
}

console.log(taskarr)


  return (
    <>
    <div id='head'><h1>The Todo List</h1></div>
    <div id='inp'><input onChange={inp} type="text" placeholder='Add task' value={taskName}/>
      <button className='custom-btn btn-5' onClick={addTask}>Add task</button> </div>
      
      <h4 style={{textAlign : "center" , fontSize : "larger"}}>Task list</h4>
      
      <table className='main_table'>
        {taskarr.map((task)=>(
          
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>{task.title} </td>
              <td> {task.status ? "Done":"Not Done"} </td>
              <td><button style={{fontSize:"medium"}} onClick={()=>del(task.id)}>Delete</button> </td>
              
            </tr>
          
        ))}
        </table>
      

        
    </>
  )
}

export default App
