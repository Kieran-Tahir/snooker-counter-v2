import React from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'

function Profile (props) {
  return (
    <div className='main-profile-container'>
      <div className="profile-box">
        <ProfileInfo/>
      </div>

      <div className='profile-games-display'>
        <div className="profile-nav">
          Nav
        </div>
        <div className="game-cards-container">
          Games.Map
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
