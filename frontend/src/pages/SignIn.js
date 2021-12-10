import {useState} from "react"
import {connect} from "react-redux"
import userActions from "../redux/actions/userActions"
import GoogleLogin from 'react-google-login'

const SignIn = (props) => {
    const [signUser, setSignUser] = useState ({
        email: "", 
        password: "",
    })

    const inputHandler = (e) => {
        setSignUser({
            ...signUser, 
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        // console.log(signUser)
        props.signIn(signUser)
    }

    const responseGoogle = (res) => {
        let googleUser = {
            email: res.profileObj.email, 
            password: res.profileObj.googleId,
            google: true,
        }
        props.signIn(googleUser)
    }

    return (
        <main>
            <h1>Welcome {props?.name}</h1>
            <h2>Sign In</h2>
            <div className="userForm">
                <form>
                    <input type="email"  onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                    <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                </form>
                <button onClick={submitForm}>Sign In</button>
                <GoogleLogin
                    clientId="556133798915-6gmkilf0cascu1bo6br8ule65fms7bek.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
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
    signIn: userActions.signIn
}


export default connect (mapStateToProps, mapDispatchToProps)(SignIn)