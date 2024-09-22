import { useContext, useState } from 'react'
import {ReactComponent as DeleteLogo} from '../../assets/icons/delete-icon.svg'
import {ReactComponent as EditLogo} from '../../assets/icons/edit-icon.svg'
import './card.css'
import AuthContext from '../../Contexts/Authcontext'
import deleteNote from '../../services/deletNote'




const Card=(props)=>{

    const {token} = useContext(AuthContext)

    
    const [obj_id,setobj_id] = useState(props.props._id)
    const [title,setTitle] = useState(props.props.title)
    const [description,setDescription] = useState(props.props.description)
    const masonryContainer = document.getElementById('mContainer')
    const dBox = document.getElementById('dBox2')

    const editTitle = document.getElementById('editTitle')
    const editDescription = document.getElementById('editDescription')
    const objectId = document.getElementById('objectId')

    const openDialog=(title,description,id)=>{
        editTitle.value=title
        editDescription.value=description
        objectId.value=id
        masonryContainer.style.filter = 'blur(10px)'
        dBox.style.visibility = 'visible'
        
    }
    
    const getId = ()=>{
        return obj_id
    }
    

    // console.log("asdad",obj_id,title,description)
    
    const handleEdit=()=>{
       
        

        openDialog(title,description,getId())
    }

    const handleDelete= async() =>{


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