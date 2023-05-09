import { useNavigate } from "react-router-dom"




export const Task = ({ taskObject, taskSetter }) => {
    //TaskOBJ is prop
    const navigate = useNavigate()



    const deleteTask = (id) => {

        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/tasks`)
                    .then(response => response.json())
                    .then(tasks => {
                        taskSetter(tasks)

                    })
            })
    }



    return (
        <>
        {/* <h2>{taskObject.child?.name}</h2> */}
            <h2>{taskObject.description}</h2>
            <ul>
                <li>{taskObject.pointValue} points</li>
                <li>{taskObject.child.name}</li>

            </ul>
            {/* {taskObject.isGuardian ? <> */}
            <button className="btn-save-edit" onClick={() => navigate(`/tasks/edit/${taskObject.id}`)}>Edit Task</button>
            <button className="btn-delete" onClick={() => deleteTask(`${taskObject.id}`)}>Delete Task</button>
            {/* </> */}
            {/* : ""} */}
        </>

    )
}
