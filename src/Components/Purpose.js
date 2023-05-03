import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./Views/ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"
import "./Purpose.css"


export const Purpose = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			// <Authorized>
				<>
                
					<NavBar /> 
					<ApplicationViews /> 
				</>
			// </Authorized>

		} />
	</Routes>
}