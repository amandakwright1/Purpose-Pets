import { Link, Outlet, Route, Routes } from "react-router-dom"
import { ChildList } from "../Child/ChildList"
import { ChildForm } from "../Child/ChildForm"
import { TaskForm } from "../Tasks/TaskForm"
import { TaskList } from "../Tasks/TaskList"
import { TaskEdit } from "../Tasks/TaskEdit"



export const ParentViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    {/* <h1>Purpose Pets</h1> */}
                    

                    <Outlet />
                </>
            }>

                
                <Route path="tasks" element={ < TaskList /> } /> 
                <Route path="children" element={ <ChildList /> } /> 
                <Route path="child/add" element={ < ChildForm /> } />
                <Route path="tasks/create" element={ < TaskForm /> } />
                <Route path="tasks/edit/:taskId" element={ < TaskEdit/> } />
                <Route path="tasks/:taskId" element={ < TaskEdit/> } />
            </Route>
        </Routes>
    )
}