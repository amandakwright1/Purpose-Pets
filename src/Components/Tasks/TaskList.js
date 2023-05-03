import { useEffect, useState } from "react"
import "./Task.css"
import { useNavigate } from "react-router-dom"
import { Task } from "./Task"

export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

useEffect(() => {
    fetch (`http://localhost:8088/tasks`)
    .then(response => response.json())
    .then(tasks => {
        setTasks (tasks)
    })}, [])


useEffect(() => {},[])




//makes a button-- only on staff profile--that when clicked lists emergency tickets.<--emergency only button
//makes a Show all button that shows all tickets on staff profile.
    return (<>
   
    {/* {
        parentObject.guardian
        ?<>
        <button onClick={() => {setEmergency(true)}}>Emergency Only</button>
        <button onClick={() => {setEmergency(false)}}>Show All</button>
        <button onClick={() => navigate("/task/create")}>Create Task</button>
        </>
        :<>  
      
         <button onClick={() => updateOpenOnly(true)}>Open Ticket</button>
         <button onClick={() => updateOpenOnly(false)}>All My Tickets</button>
         </>
    } 
     */}
    <h2>List of Tasks</h2>
    <button className="create-button" onClick={() => navigate("/tasks/create")}>Create Task</button>
    <article className="tasks">
            {
                tasks.map(
                    (task) =>  <Task 
                    taskObject={task} /> //TaskObj is a prop and then use it on  Task.js
                )
            }
        </article>
    </>



        )}