import axios from "axios" 

const userActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
                
            }
            else {
                console.log(response.data.errors)
            }
           return response 
        }
    },

    signIn: (signUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signIn", {...signUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})   
            }
            else {
                console.log(response.data.response)
            }
            return response
        }
    },
}

export default userActions