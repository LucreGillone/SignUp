import {useState} from "react"
import {connect} from "react-redux"
import userActions from "../redux/actions/userActions"
import GoogleLogin from 'react-google-login'

const SignUp = (props) => {
    const [newUser, setNewUser] = useState ({
        name: "", 
        email: "",
        password: "",
    })

    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
            
        })
    }

    const responseGoogle = (res) => {
        console.log(res)
        let googleUser = {
            name: res.profileObj.name,
            email: res.profileObj.email, 
            password: res.profileObj.googleId,
            google: true,
        }
        props.signUp(googleUser)
        .then((response) => response.data.success)
        .catch((error) => console.log(error))
    }

    const submitForm = () => {
        props.signUp(newUser)
    }

    return (
        <main>
            <h1>Welcome {props.name}</h1>
            <h2>Sign Up</h2>
            <div className="userForm">
                <form>
                    <input type="text" onChange={inputHandler} name="name" placeholder="Name" autoComplete="nope"/>
                    <input type="email"  onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                    <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                </form>
                <button onClick={submitForm}>Sign Up</button>
                <GoogleLogin
                    clientId="556133798915-6gmkilf0cascu1bo6br8ule65fms7bek.apps.googleusercontent.com"
                    buttonText="Sign un with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.users.name
    }
}

const mapDispatchToProps = {
    signUp: userActions.signUp
}

export default connect (mapStateToProps, mapDispatchToProps)(SignUp)