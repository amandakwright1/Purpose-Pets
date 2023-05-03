import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ChildNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tasks">Tasks</Link>
            </li>
            {/* <li className="navbar__item active">
                    <Link className="navbar__link" to="/pets">Pet Shop</Link>
            </li> */}
           
            {
                localStorage.getItem("purpose_parent")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("purpose_parent")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}