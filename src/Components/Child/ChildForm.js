import { useState } from "react"
import { useNavigate } from "react-router-dom"




export const ChildForm = ({updateChild}) => {

    const [child, update] = useState({})
    const navigate = useNavigate()


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const newChild ={                         
            name: child.name,
            email: child.email
        }

      
            fetch (`http://localhost:8088/children`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newChild),
            })
            .then(() => fetch(`http://localhost:8088/children?_expand=children`))
            .then(r => r.json())
            .then(() => {
                navigate("/children")
        });
    }
        // required input
        //conditional with window alert

    const inputOnChange = (event) => {
       
            const copy = {...child}
            copy[`${event.target.name}`] = event.target.value
            update(copy)
        
    }

    return (
        <form className="childForm"
        onSubmit={handleSaveButtonClick}>
            <h2 className="personForm__title">Add a Child</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">name: </label>
                    <input
                    name="name"
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="type a name here ..."
                        value={child.name}
                         onChange={inputOnChange}
                         
                        />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="name">email: </label>
                    <input
                    name="email"
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="add your child's email address ..."
                        value={child.email}
                         onChange={inputOnChange}
                         
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary">
                Submit 
            </button>
        </form>
    )
}