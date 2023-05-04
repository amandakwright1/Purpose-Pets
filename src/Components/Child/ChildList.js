import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Child.css"
import { Child } from "./Child"


export const ChildList = ({child}) => {
    const [children, setChild] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        fetch (`http://localhost:8088/child`)
        .then(response => response.json())
        .then(children => {
            setChild (children)
        })}, [])




return (<>

<h2 className="child-header">Children</h2>


<article className="childrenList">
        {children.map(singleChild =>  <Child key = {singleChild.id} child= {singleChild} />)}
                
          
    </article>
    <button className="create-button" onClick={() => navigate("/child/add")}>Add Child</button>
</>



    )}