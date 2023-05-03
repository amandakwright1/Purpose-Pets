import { Outlet, Route, Routes } from "react-router-dom"

import { TaskList } from "../Tasks/TaskList"
//import { ChildList } from "../Child/ChildList"





export const ChildViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Purpose Pets</h1>
                    

                    <Outlet />
                </>
            }>
                
                <Route path="tasks" element={ < TaskList /> } />  
              

              
            </Route>
        </Routes>
    )
}