import React from 'react'
import {Link} from 'react-router-dom'


function ErrorPage() {
  return (<>
    <div>ErrorPage</div>
    <Link to={'/'}>BackToHome</Link>
  </>
    
  )
}

export default ErrorPage