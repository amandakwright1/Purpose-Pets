import { Link, Outlet, Route, Routes } from "react-router-dom"

import { ChildList } from "../Child/ChildList"
import { TaskForm } from "../Tasks/TaskForm"
import { TaskList } from "../Tasks/TaskList"



export const ParentViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Purpose Pets</h1>
                    

                    <Outlet />
                </>
            }>

                
                <Route path="tasks" element={ < TaskList /> } /> 
             {/* <Route path="children" element={ <ChildList /> } />  */}
                <Route path="tasks/create" element={ < TaskForm /> } />
               
            </Route>
        </Routes>
    )
}