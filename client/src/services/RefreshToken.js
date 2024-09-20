import {postRequest} from "../utils/apiRequest";

const registerEndpoint = 'authrefreshToken'

async function refreshToken(email,token) {
    const payload = {
        "email":email,
        "token":token
    }

   try{
        const response = await postRequest(registerEndpoint,payload,undefined)

        // console.log("reponse: ",response)


        return response

   }
   catch(error){
        // console.log("error: ",error.response)
        return error.response
   }
    
}

export default refreshToken