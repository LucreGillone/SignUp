import axios from "axios" 

const userActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
                
            }
           return response 
        }
    },

    logUser: (logUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signIn", {...logUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})   
            }
            return response
        }
    },
}

export default userActions