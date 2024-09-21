import { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import './home.css'
import Masonry from 'react-masonry-css'
import AuthContext from '../../Contexts/Authcontext'
import getUserNotes from '../../services/getNotes'
import addNewNote from '../../services/addNotes'

const Home = ()=>{
    const {username,email,token,logout,setAuthToken} = useContext(AuthContext)
    const [notes,setNotes] = useState(['a'])
    const [loadingState,setLoadingState] = useState(true)
    const masonryContainer = document.getElementById('mContainer')
    const homeContainer = document.getElementById("homeContainer")
    const dBox = document.getElementById('dBox')
    const newTitle = document.getElementById('newTitle')
    const newDescription = document.getElementById('newDescription')


    const addNote = async() =>{

        // console.log("new:",newTitle.value)

        // console.log(newDescription.value)
        const note = {
         
            "title":newTitle.value,
            "description":newDescription.value
    
        }

        await addNewNote(email,token,note)
        
        
    }

    const openDialog=()=>{
        masonryContainer.style.filter = 'blur(10px)'
        dBox.style.visibility = 'visible'
        
    }
    const closeDialog=()=>{
        masonryContainer.style.filter = 'blur(0px)'
        dBox.style.visibility = 'hidden'
        
    }

    
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await getUserNotes(email, token);
            if (response.Error) {
                logout();
                setNotes(['']);
            } else {
                setAuthToken(response.token);
                setNotes(response.data);
            }
            setLoadingState(false);
        };
    
        fetchNotes();
    }, [email, token, logout, setAuthToken]);
    


    

    const breakpoints={
        default:3,
        1023:2,
        700:1
    }
if (loadingState){
    return (
        <div className="loader"></div>
    )
}
else{
    // console.log(notes)


    return (
        <>
        <div className="homeContainer" id='homeContainer'>
            <div className="buttonContainer">
            <button className='button_add' onClick={async()=>{
                openDialog()
                // addNote()
                
            }}>Add Note</button>
            
            </div>
            <div className='below_Button'>
            <div className='masonry_Container' id='mContainer'>

            <Masonry
             breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
            


                {
                    notes.map((data)=>{
                        // console.log(data.description)
                        return <Card props={data} key={data._id} />
                    })
                }
            </Masonry>
            </div>
            </div>

            <form className="dialogeBox" id='dBox'>

                <div className='closeDialogeButton' onClick={()=>{closeDialog()}}>
                    close
                </div>
                
                <input type='text' className='titleInput' maxLength='9' placeholder='Title' id='newTitle' required/>

                <textarea  id='newDescription' placeholder='Description Goes Here ...' required></textarea>

                <button  className='button buttonAdd' onClick={async()=>{addNote()}}  >Add</button>

                
            
            </form>
        </div>

        
        </>
    )
}
}

export default Home