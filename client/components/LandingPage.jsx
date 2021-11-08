import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated } from './Authenticated'

function LandingPage () {
  return (
    <>
      <div className='newgame-container'>
        <div className="button-container">
          <IfAuthenticated>
            <div className="pointer">👉</div>
          </IfAuthenticated>
          <Link to='/snooker' replace className='regular-button'>Snooker</Link>
          <Link to='/nineball' replace className='regular-button'>9 Ball</Link>
          <Link to='/pool' replace className='regular-button'>Pool</Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage
