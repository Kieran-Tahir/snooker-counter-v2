import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../apis/users'

function profileInfo (props) {
  const [edit, setEdit] = useState(false)
  const { auth0Id, firstName, lastName, profilePic, bio } = props.user
  const newUser = {
    profilePic: 'images/ronnie2.jpg',
    rating: '★ 5/5'
  }

  const [myBio, setMyBio] = useState('')

  function handleClick () {
    setEdit(true)
  }

  async function handleSubmit () {
    try {
      setEdit(false)
      await updateUser(myBio, auth0Id)
    } catch (error) {
      console.error(error)
    }
  }

  function handleChange (event) {
    setMyBio(event.target.value)
  }

  return (
    <>
      { edit === true
        ? <>
          <div className="user-info">
            <img src={newUser.profilePic}></img>
            <div className='user-info-text'>
              <span className="profile-name"> {firstName}{lastName}</span>
              <span className="bio-header-text">{newUser.rating}</span>
            </div>
          </div>
          <div className='bio-box'>
            <span className="bio-header-text"><b>Bio:</b><br></br></span>
            <form onSubmit={(() => handleSubmit())}>
              <div>
                <input
                  type="text"
                  value={myBio}
                  onChange={handleChange}
                  placeholder={bio}
                />
              </div>
              <button className="bio-buttons" type='submit'>SAVE</button>
            </form>
          </div>
        </>
        : <>
          <div className="user-info">
            <img src={newUser.profilePic}></img>
            <div className='user-info-text'>
              <span className="profile-name"> {firstName}{lastName}</span>
              <span className="bio-header-text">{newUser.rating}</span>
            </div>
          </div>
          <div className='bio-box'>
            <span className="bio-header-text"><b>Bio:</b><br></br></span>
            {myBio || bio}
          </div>
        </>}
      <div className="bio-buttons" onClick={(() => handleClick())}>
        <span>EDIT PROFILE</span>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(profileInfo)
