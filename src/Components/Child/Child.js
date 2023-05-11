import { Link } from "react-router-dom"
import "./Child.css"




export const Child = ({child}) => {
   
   return (
        <>
            <h2>{child.name}</h2>
            
                <li>{child.email}</li>

        </>

    )
}