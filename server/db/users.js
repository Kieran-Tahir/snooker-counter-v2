const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'name',
      'email',
      'description')
}

function getUser (auth0Id, db = connection) {
  return db('users')
    .where('auth0_id', auth0Id)
    .select('id',
      'auth0_id as auth0Id',
      'first_name as firstName',
      'bio',
      'profile_pic as profilePic',
      'rating'
    )
    .first()
}

function addUser (user, db = connection) {
  const { auth0Id, firstName, lastName } = user
  const newUser = { auth0_id: auth0Id, first_name: firstName, last_name: lastName }
  return db('users')
    .insert(newUser)
}

function updateUser (user, auth0Id, db = connection) {
  const bio = user
  return db('users')
    .where('auth0_id', auth0Id)
    .update('bio', bio)
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser
}
