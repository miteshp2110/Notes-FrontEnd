import axios, { AxiosError } from 'axios'



const url= 'http://127.0.0.1:60399/'

async function getRequest(endpoint,payload,header) {
    // try{
    //     const response = await axios.get()
    // }   
    console.log("url:",(url+endpoint)+":")
    console.log("payload:",payload)
    console.log("header:",header)
}

async function postRequest(endpoint,payload,header) {

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



export default postRequest