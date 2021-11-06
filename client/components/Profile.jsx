import React from 'react'
import { connect } from 'react-redux'

function Profile (props) {
  return (
    <div className='main-profile-container'>
      <div className="profile-box">
        {props.user.hasVehicle ? <ProfileInfo key={car.id} car={car}/>
          : <ProfileInfo />}
      </div>

      <div className='profile-ride-display'>

        <div className="profile-nav">
          <button className="profile-buttons" onClick={() => handleClick('driving')}> My posted rides</button>
          <button className="profile-buttons"onClick={() => handleClick('passenger') }>My booked rides</button>
        </div>
        { view === 'driving'
        // Posted rides below
          ? (postedRides.length
            ? <div className="profile-cards-container">
              {postedRides.map((ride, user) => {
                return <RideCard key={ride.id} ride={ride} user={firstName}/>
              })}
            </div>
            : <div className="profile-cards-container">
              <h2>Sorry {firstName} you have not posted any rides yet</h2>
            </div>
          )
          // Booked rides below
          : (myRides.length
            ? <div className='profile-cards-container'>
              {myRides.map(ride => {
                return (
                  <BookingCard key={ride.id} ride={ride} />
                )
              })}
            </div>
            : <div className="profile-cards-container">
              <h2>Sorry {firstName} you have not booked any rides yet</h2>
            </div>
          )
        }
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
