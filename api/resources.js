const bcrypt = require('bcryptjs') // for auth and password hash
const express = require('express')
const route = express.Router()

module.exports = function () {
  route.post('/login/authenticate', authenticate)
  route.post('/register/encrypt', encrypt)

  function authenticate (req, res, next) {
    const { enteredUser, user } = req.body
    bcrypt.compare(enteredUser.password, user.hash, (err, response) => {
      if (response) {
        const { email, userName } = user
        req.session.user = { email, userName }
        res.json({login: true, user})
      } else {
        res.json({login: false, error: 'Invalid email/Password'})
      }
    })
  }

  function encrypt (req, res, next) {
    const password = req.body.password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        res.json({ hash })
      })
    })
  }

  return route
}
