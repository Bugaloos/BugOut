const bcrypt = require('bcryptjs') // for auth and password hash
const express = require('express')
const route = express.Router()
require('dotenv').load()

// Load the Cloudant library.
var Cloudant = require('cloudant')

// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || 'nodejs'
var passwordC = process.env.cloudant_password

module.exports = function () {
  route.post('/login/authlocal', authlocal)
  route.post('/login/authserver', authserver)
  route.post('/register/encrypt', isUserUnique, encrypt)
  route.post('/creategroup', isGroupUnique)

  function authlocal (req, res, next) {
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

  function authserver (req, res, next) {
    const { userName, password } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use('users')
      db.get(userName, (err, user) => {
        if (err) {
          console.error(err)
        } else {
          bcrypt.compare(password, user.hash, (error, response) => {
            if (response) {
              const { email, userName } = user
              req.session.user = { email, userName }
              res.json({login: true, user})
            } else {
              res.json({login: false, error: 'Invalid email/Password'})
            }
          })
        }
      })
    })
  }
  function isGroupUnique (req, res, next) {
    const { groupName } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to hookup with Cloudant:' + error.message)
      }
      var db = cloudant.db.use('groups')
      db.get(groupName, (err, group) => {
        if (err) {
          res.json({error: err})
        } else if (group) {
          res.json({addgroup: false, error: 'This group already exists'})
        } else {
          next()
        }
      })
    })
  }

  function isUserUnique (req, res, next) {
    const { userName } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use('users')
      db.get(userName, (err, user) => {
        if (user) {
          res.json({register: false, error: 'User Name already in use'})
        } else {
          next()
        }
      })
    })
  }

  function encrypt (req, res, next) {
    const { userName, password, email } = req.body
    bcrypt.genSalt(10, (err, salt) => {
      if(err) throw err
      bcrypt.hash(password, salt, (error, hash) => {
        if(error) throw error
        const user = {_id: userName, email, hash}
        console.log(user);
        addUserToCouch(user, (err, response) => {
          if (err) {
            res.json({register: false, error: err})
          }else{
            res.json({register: true, user: {_id: userName, email}})
          }
        })
      })
    })
  }

  function addUserToCouch (user, cb) {
    Cloudant({account:username, password:passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use("users")
      db.insert(user, (err, res) => {
        cb(err, res)
      })
    })
  }

  return route
}
