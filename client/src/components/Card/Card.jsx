import { useContext, useState } from 'react'
import {ReactComponent as DeleteLogo} from '../../assets/icons/delete-icon.svg'
import {ReactComponent as EditLogo} from '../../assets/icons/edit-icon.svg'
import './card.css'
import AuthContext from '../../Contexts/Authcontext'
import deleteNote from '../../services/deletNote'

import { useNavigate } from 'react-router-dom'


const Card=(props)=>{

    const {token} = useContext(AuthContext)

    const navigate= useNavigate()
    
    const [obj_id,setobj_id] = useState(props.props._id)
    const [title,setTitle] = useState(props.props.title)
    const [description,setDescription] = useState(props.props.description)
    
    
    const getId = ()=>{
        return obj_id
    }
    

    // console.log("asdad",obj_id,title,description)
    
    const handleEdit=()=>{
        console.log("update for ")
        console.log(title)
        console.log(description)
    }

    const handleDelete= async() =>{
        // console.log("delete for ")
        // console.log(title)
        // console.log(description)
        // console.log(obj_id)

        const res=await deleteNote(obj_id,token)

        if (res.Error == false){
            // console.log("refresh")
            window.location.reload()
        }
        
        
    }

    return (
        <>
            
                <div className='noteCard'>
                    
                    <div className="cardTitle">{title}</div>

                    <div className="cardDescription">
                        {description}
                    </div>
                    
                    <div className='logo_container'>
                        <EditLogo  onClick={handleEdit} />
                        <DeleteLogo onClick={handleDelete}/>

                    </div>
                    </div>
                
                
            
        
        </>
    )
}

export default Card