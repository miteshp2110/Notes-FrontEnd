import postRequest from "../utils/apiRequest";

const registerEndpoint = 'authrefreshToken'

async function refreshToken(email,token) {
    const payload = {
        "email":email,
        "token":token
    }

    const response = await postRequest(registerEndpoint,payload,undefined)


    return response
    
}

export default refreshToken