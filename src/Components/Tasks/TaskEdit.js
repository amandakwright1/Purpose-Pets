import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const TaskEdit = () => {
    const [task, saveTask] = useState({
        email: "",
        fullName: "",
        isGuardian: false
    })
    
    const { taskId } = useParams()
    const navigate = useNavigate()

    //gets ticket state from the API
    useEffect(() => {
        fetch(`http://localhost:8088/tasks/${taskId}`)
            .then(response => response.json())
            .then((data) => {
                saveTask(data)
            })
    }, [taskId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
//Put request to replace OBJ being edited. 
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/tasks")
            })
    }


    return (
        <form className="taskForm">
            <h2 className="taskForm__title">Edit Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of task"
                        value={task.description}
                        onChange={
                            (evt) => {
                                const copy = {...task}//creates copy of existing state
                                copy.description = evt.target.value
                                saveTask (copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Point Value</label>
                    <input type="text"
                        value={task.pointValue}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.pointValue = evt.target.value 
                                saveTask (copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="child">Child Name</label>
                    <input type="text"
                        value={task.childId}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.childId = evt.target.value 
                                saveTask (copy)
                            }
                        } />
                          </div>
            </fieldset> 
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn-save-edit">
            Save Edits
        </button>
    </form>
    
)
                    }