
import { deleteRequest } from "../utils/apiRequest";

const registerEndpoint= 'note'

async function deleteNote(obj_id,token) {
    const payload = {
        "id":obj_id
    }
    // console.log(token)
    const response = await deleteRequest(registerEndpoint,payload,token)

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

export default deleteNote