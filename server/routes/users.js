const express = require('express')

const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({ users })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', async (req, res) => {
  const { auth0Id, name, email, description } = req.body
  const user = { auth0Id, name, email, description }
  try {
    await db.addUser(user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

router.post('/:auth0id', async (req, res) => {
  const bio = req.body.bio
  const auth0id = req.params.auth0id
  try {
    await db.updateUser(bio, auth0id)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to update user' })
  }
})

module.exports = router
