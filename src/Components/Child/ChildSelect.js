import { useState, useEffect } from "react"




export const ChildSelect = ({handleChange}) => {  

    const [children, setChildren] = useState([])
    // const [childUser, parentUser] = useState([])
       
   


    useEffect(() => {
    fetch(`http://localhost:8088/children`)
    .then(r => r.json())
    .then( children => setChildren(children))
    }, [])

    

    return(

            <select  name="childId" required className="childSelect" onChange={handleChange}> 
                <option value="">Assign Child</option>
                {children.map(child => <option key={child.id} value={child.id}>{child.name}</option>)}
            </select>
    )
}