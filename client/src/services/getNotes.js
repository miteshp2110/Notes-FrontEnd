

import {postHeaderRequest} from '../utils/apiRequest'
import refreshToken from './RefreshToken'

const registerEndpoint= 'noteall'

async function getUserNotes(email,token){
    

    const payload = {
        "email":email
    }
    const response=await postHeaderRequest(registerEndpoint,payload,token)
    //console.log(response)

    if(response.Error){
        if(response.Response.data.Error == 'Expired Token'){
            // console.log("Expired Token")
            const refreshResponse = await refreshToken(email,token)
            
            if(refreshResponse.Error){
                // console.log("Invalid Token")
                return {"Error":true}
            }else{
                const refreshToken = refreshResponse.Response.data.token
                
                return getUserNotes(email,refreshToken)
            }
            // console.log(refreshResponse)
        }
        else{
            // console.log('Invalid Token')
            return {"Error":true}
        }
    }
    else{
        // console.log(response.Response.data.notes)
        // console.log("Token Working")
        const data = response.Response.data.notes
        const resp = {
            
            'token':token,
            'data':data
        }
    
        return resp
        // return {"Error":true}
        // console.log(resp)
    }
    
    


}

export default getUserNotes