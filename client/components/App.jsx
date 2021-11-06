import React from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'

import Nav from './Nav'
import Registration from './Registration'
import LandingPage from './LandingPage'
import nineball from './nineball'
import PingRoutes from './PingRoutes'

import { Route } from 'react-router'
import 'animate.css'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Route path='/' component={Nav} />
      <Route path='/' component={PingRoutes} />
      <Route path='/register' component={Registration} />
      <Route exact path='/' component={LandingPage} />
      <Route path='/nineball' component={nineball} />
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    token: globalState.user.token
  }
}

export default connect(mapStateToProps)(App)
