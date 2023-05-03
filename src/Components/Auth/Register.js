import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [parent, setParent] = useState({
        email: "",
        fullName: "",
        isGuardian: false
    })
    let navigate = useNavigate()

    const registerNewParent = () => {
        return fetch("http://localhost:8088/parents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parent)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("purpose_parent", JSON.stringify({
                        id: createdUser.id,
                        guardian: createdUser.isGuardian
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/parents?email=${parent.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewParent()
                }
            })
    }

    const updateParent = (evt) => {
        const copy = {...parent}
        copy[evt.target.id] = evt.target.value
        setParent(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Purpose Pets</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateParent}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateParent}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...parent}
                      setParent(copy)
                    }}
                        type="checkbox" id="isGuardian" />
                    <label htmlFor="email"> I am a Guardian </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}
