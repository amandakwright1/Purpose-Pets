import { Outlet, Route, Routes } from "react-router-dom"
import { TaskList } from "../Tasks/TaskList"
import { PetList } from "../Pets/PetList"
// import { DogImage } from "../Pets/PetList"





export const ChildViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    {/* <h1>Purpose Pets</h1> */}
                    

                    <Outlet />
                </>
            }>
                
                <Route path="tasks" element={ < TaskList /> } />  
                <Route path="pets" element={ < PetList /> } />
                 
                 {/* <DogImage /> */}
              
            </Route>
        </Routes>
    )
}
