import axios, { AxiosError } from 'axios'



const url= 'http://127.0.0.1:58285/'

export async function postHeaderRequest(endpoint,payload,token) {
    try{
        const final_url=url+endpoint
    
        const response = await axios.post(final_url,payload,

            {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            }
        );
        const res={
            'Error':false,
            'Response':response
        }
        return res

    }
    catch (error){
        
        //console.log("error: ",error.response.data)
        const res= {
            "Error":true,
            "Response":error.response
        }
        return res
    }
}

export async function postRequest(endpoint,payload,header) {

    try{
        const final_url=url+endpoint
    
        const response = await axios.post(final_url,payload,header);
        const res={
            'Error':false,
            'Response':response
        }
        return res

    }
    catch (error){
        
        //console.log("error: ",error.response.data)
        const res= {
            "Error":true,
            "Response":error.response.data
        }
        return res
    }
}

export async function deleteRequest(endpoint,payload,token) {
    try{
        const final_url=url+endpoint
        console.log(final_url)
        const response = await axios.delete(final_url,

            {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
                data:payload
            }
        );
        const res={
            'Error':false,
            'Response':response
        }
        return res

    }
    catch (error){
        
        //console.log("error: ",error.response.data)
        const res= {
            "Error":true,
            "Response":error.response
        }
        return res
    }
    
}


