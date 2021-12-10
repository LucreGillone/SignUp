import {useState} from "react"
import {connect} from "react-redux"
import userActions from "../redux/actions/userActions"

const SignUp = (props) => {
    const [newUser, setNewUser] = useState ({
        name: "", 
        email: "",
        password: "",
    })

    const inputHandler = (e) => {
        console.log(e.target.value)
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
            
        })
    }

    const submitForm = () => {
        props.signUp(newUser)
    }

    return (
        <main>
            <h2>Sign Up</h2>
            <form>
                <input type="text" onChange={inputHandler} name="name" placeholder="Name" autoComplete="nope"/>
                <input type="email"  onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
            </form>
            <button onClick={submitForm}>Sign Up</button>
        </main>
    )
}

const mapDispatchToProps = {
    signUp: userActions.signUp
}

export default connect (null, mapDispatchToProps)(SignUp)