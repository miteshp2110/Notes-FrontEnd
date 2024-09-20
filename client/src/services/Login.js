import {postRequest} from "../utils/apiRequest";

const registerEndpoint = 'authlogin'

async function userLogin(email,password) {
    const payload = {
        "email" : email,
        "password": password
    }
    const response = await postRequest(registerEndpoint,payload,undefined)

    return response
}

export default userLogin