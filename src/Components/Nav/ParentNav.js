import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ParentNav = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1 className="purposeheader">Purpose Pets</h1>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tasks">Tasks</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/children">Children</Link>
                </li>
           
            {
                localStorage.getItem("purpose_parent")
              ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="/login" onClick={() => {
                            localStorage.removeItem("purpose_parent")
                            navigate("/login", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
        </>
    )
}