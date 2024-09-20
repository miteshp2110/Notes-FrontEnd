import axios, { AxiosError } from 'axios'



const url= 'http://127.0.0.1:52282/'

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


