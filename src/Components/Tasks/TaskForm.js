import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChildSelect } from "../Child/ChildSelect"

// import React from 'react';

export const TaskForm = () => {
    /*
         Add the correct default properties to the
        initial state object
    */
    const [task, update] = useState({
        email: "",
        fullName: "",
        isGuardian: false,
        childId:""              
    })
    
    const inputOnChange = (event) => {
       
        const copy = {...task}
        copy[`${event.target.name}`] = event.target.value
        update(copy)
    }



    /*
         Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localParentUser =localStorage.getItem ("purpose_parent")
    const parentObject = JSON.parse(localParentUser)//OBJ with 2 keys

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //  Create the object to be saved to the API

        const taskToSendToApi = {
            userId: parentObject.id,
            description: task.description,
            pointValue: +task.pointValue, 
            childId: +task.childId 
        }

        if (taskToSendToApi.childId){  //This is where it checks to see if a child has been selected. If user tries to submit without selecting a child a window alert pops up.
            return fetch (`http://localhost:8088/tasks
        `, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToSendToApi)
        })
        .then(response => response.json())
        .then(() => {
             navigate("/tasks")
        })
        }
        else {window.alert ("Please select a child for task")}



    }

    return (
        <>
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
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
                                update (copy)
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
                                update (copy)
                            }
                        } />
                </div>
            </fieldset>
            <ChildSelect required handleChange={inputOnChange}/>
         
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Task
            </button>
        </form>

        <PictureChart/>
        </>
       
    )
    
  
    
                    }  
                    
                    
                    export const PictureChart=()=> {

                        return <img className="chart" src="/ChoreChart.jpg" alt="chart" />
                            

                         
                    }    
                