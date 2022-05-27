import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container-error'>
        <h1>Oops!</h1>
        <span>Error 404 - Page not found</span>
        <Link to="/">
            Back to Homepage
        </Link>
    </div>
  )
}

export default Error