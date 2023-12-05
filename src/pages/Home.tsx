import React from 'react'
import {Link} from 'react-router-dom' 
import './Home.css'
function Home() {
    return (<><div className='NavBar'>
    <Link to={'/'}>Home</Link>
    <Link to={'/Register'}>Register</Link>
    <Link to={'/Post'}>Post</Link>
    </div>

    <div className='HomeForm'>HomePage</div>
    </>
  )
}

export default Home