
import {postRequest} from '../utils/apiRequest'


const registerEndpoint= 'authsignUp'

async function userSignUp(username,email,password){

    const payload = {
        "username":username,
        "email":email,
        "password":password
    }
    const response=await postRequest(registerEndpoint,payload,undefined)
    //console.log(response)
    return response


}

export default userSignUp