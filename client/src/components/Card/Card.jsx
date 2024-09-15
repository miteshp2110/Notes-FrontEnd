import {ReactComponent as DeleteLogo} from '../../assets/icons/delete-icon.svg'
import {ReactComponent as EditLogo} from '../../assets/icons/edit-icon.svg'
import './card.css'


const Card=(props)=>{
    const obj_id=props.id
    const title=props.title
    const description=props.description

    
    const handle=()=>{
        console.log("click ")
    }

    return (
        <>
            
                <div className='noteCard'>
                    
                    <div className="cardTitle">Title</div>

                    <div className="cardDescription">
                        {props.desc}
                    </div>
                    
                    <div className='logo_container'>
                        <EditLogo  onClick={handle} />
                        <DeleteLogo/>

                    </div>
                    </div>
                
                
            
        
        </>
    )
}

export default Card