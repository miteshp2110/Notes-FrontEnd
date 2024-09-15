import { useContext } from 'react'
import Card from '../Card/Card'
import './home.css'

import Masonry from 'react-masonry-css'
import AuthContext from '../../Contexts/Authcontext'
import refreshToken from '../../services/RefreshToken'


const Home = ()=>{
    const {username,email,token} = useContext(AuthContext)

    const breakpoints={
        default:3,
        1023:2,
        700:1
    }
    return (
        <>
        <div className="homeContainer">
            <div className="buttonContainer">
            <button className='button_add' onClick={async()=>{
                const response = await refreshToken(email,token)

                console.log(response)
            }}>Add Note</button>
            
            </div>
            <div className='below_Button'>
            <div className='masonry_Container'>

            <Masonry
             breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
            
                <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab officiis debitis enim sunt, incidunt at accusamus facere id fugit sit obcaecati. Nostrum ad eos odio laboriosam. Culpa ia porro labore iste tenetur omnis, ipsum facilis quasi maiores reiciendis ut voluptatibus dolorum accusantium corrupti suscipit nesciunt. Iste, laudantium dolor necessitatibus maxime distinctio dolore possimus, earum dignissimos quis obcaecati, eos accusamus quaerat enim. Iste ut iusto, voluptatibus voluptas suscipit quidem officia quae, quibusdam placeat voluptate animi qui atque illum eum tempora accusantium saepe rerum incidunt dicta necessitatibus porro corrupti consequatur. Recusandae odit eius perspiciatis. Ea placeat facilis rem officia expedita vitae deserunt alias!" />

                <Card desc="sad jlhasd;lha;sldh l;ahsd ;lkahsd ;lahsd lj;ha sdlt consectetuct consectetuct consectetuct consectetucj;h a;sljdh ;lja shd" />

                <Card desc="sad jlhasdt consectetuct consectetuct consectetuct consectetuct consectetuc;lha;sldh l;ahsd ;lkahsd ;lahsasdasd aaas" />
                <Card desc="sad jlhasd;lha;sldh l;ahsd ;lkahsd ;lahsasdasdsdsaas" />
                <Card desc="sad jlhasd;lha;sldh l;ahsd ;lkahsd ;lahsd lj;ha sdlj;h a;sljdh ;lja shd" />
                
                <Card desc="Lorem ipsumasdasdasdasdasasdasdasasdasdasdasdas dolor sit amet consectetuceat facilis rem officia expedita vitae deserunt alias!" />
                <Card desc="sad jlhasd;lha;sldh lt consectetuct consectetuct consectetuct consectetuct consectetuct consectetuc;ahsd ;lkahsd ;lahsasdasd aaas" />
                <Card desc="sad jlhasd;lha;sldh l;ahst consectetuct consectetuct consectetuct consectetucd ;lkahsd ;lahsasdasdsdsaas" />
                <Card desc="sad jlhasd;lha;t consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetucsldh l;ahsd ;lkahsd ;lahsd lj;ht consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuct consectetuca l sdlj;h a;sljdh ;lja shd" />
                
                <Card desc="Lorem ipsum dolor sit amet consectetuceat facilis rem officia expedita vitae deserjahsdhasldhunt alias!" />
                <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab officiis debitis enim sundeserunt alias!" />
            </Masonry>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home