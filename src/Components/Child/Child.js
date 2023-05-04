import { Link } from "react-router-dom"




export const Child = ({child}) => {
   
   return (
        <>
            <h2>{child.name}</h2>
            
                <li>{child.userName}</li>

        </>

    )
}