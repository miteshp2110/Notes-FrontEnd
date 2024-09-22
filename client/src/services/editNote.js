
import { putHeaderRequest } from "../utils/apiRequest";

const registerEndpoint= 'note'

async function editANote(obj_id,title,description,token) {
    const payload = {
        "note":{
             "_id": obj_id,
             "description": description,
             "title": title
        } 
     }
    // console.log(token)
    const response = await putHeaderRequest(registerEndpoint,payload,token)
     console.log(response)
    if(response.Response.data.Success){
        // console.log("Deleted")
        return {"Error":false}
    }
    else{
        // console.log("Some error")
        return {"Error":true}
    }
    // console.log(response)
}

export default editANote