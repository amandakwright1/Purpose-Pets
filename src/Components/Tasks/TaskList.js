import { useEffect, useState } from "react"
import "./Task.css"
import { useNavigate } from "react-router-dom"
import { Task } from "./Task"

export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFiltered] = useState([])
    const [openOnly, updateOpenOnly] = useState(false)
    const navigate = useNavigate()

useEffect(() => {
    fetch (`http://localhost:8088/tasks?_expand=child`)
    .then(response => response.json())
    .then(tasks => {
        setTasks (tasks)
    })}, [])


useEffect(() => {},[])

const purposeUser =localStorage.getItem ("purpose_parent")
const purposeUserObject = JSON.parse(purposeUser)//OBJ with 2 keys -id and staff.



useEffect (
    () => {
        if (purposeUserObject.guardian){
            // for parent-want to see all tasks
             setFiltered(tasks)
        }
        else {
            //for children-only want to see own tasks
            const myTasks =tasks.filter(task => task.userId === purposeUserObject.id)
            setFiltered(myTasks)
        }
    },
    [tasks]
    )
//whole purpose of use effect is to observe state

useEffect(
    () => {
        if (openOnly){
            const openTaskArray =tasks.filter(task => { 
        return task.userId === purposeUserObject.id && task.dateCompleted === ""
    })
     setFiltered(openTaskArray)
}
else {
    const myTasks = tasks.filter(task => task.userId === purposeUserObject.id)

    setFiltered(myTasks)
}
    },
    [openOnly]
)




//makes a button-- only on staff profile--that when clicked lists emergency tickets.<--emergency only button
//makes a Show all button that shows all tickets on staff profile.
    return (<>

          <h2>List of Tasks</h2>
 
 {purposeUserObject.isGuardian ? <>
           
 
            <button className="create-button" onClick={() => navigate("/tasks/create")}>Create Task</button>
            </> 
             : ""
        
            }
    
  
   

    <article className="tasks">
            {
                tasks.map(
                    (task) =>  <Task 
                    taskObject={task} taskSetter={setTasks} /> //TaskObj is a prop and then use it on  Task.js
                )
                
            }
              
        </article>
    </>



        )}