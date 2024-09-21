import { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import './home.css'
import Masonry from 'react-masonry-css'
import AuthContext from '../../Contexts/Authcontext'
import getUserNotes from '../../services/getNotes'

const Home = ()=>{
    const {username,email,token,logout,setAuthToken} = useContext(AuthContext)
    const [notes,setNotes] = useState(['a'])
    const [loadingState,setLoadingState] = useState(true)


    const addNote = () =>{
        
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
        <div className="homeContainer">
            <div className="buttonContainer">
            <button className='button_add' onClick={async()=>{
                console.log("Add Button")
            }}>Add Note</button>
            
            </div>
            <div className='below_Button'>
            <div className='masonry_Container'>

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
        </div>
        </>
    )
}
}

export default Home