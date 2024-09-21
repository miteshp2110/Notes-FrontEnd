

import {postHeaderRequest} from '../utils/apiRequest'


const registerEndpoint= 'note'

async function addNewNote(email,token,note){
    

    const payload = {
        "email":email,
        "note":note
    }
    const response=await postHeaderRequest(registerEndpoint,payload,token)
    // console.log(response.Error)
    console.log(response)
    if (response.Error == false){
        return {"Error":false}
    }
    else{
        return {"Error":true}
    }

    
    
    


}

export default addNewNote