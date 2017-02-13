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
  route.post('/register', isUserUnique, encrypt)
  route.post('/createGroup', isGroupUnique, createGroupDB, addToGroups)
  route.get('/getAuth', sendAuth)

  function authlocal (req, res, next) {
    const { enteredUser, user } = req.body
    bcrypt.compare(enteredUser.password, user.hash, (err, response) => {
      if (response) {
        const { email, userName } = user
        req.session.user = { email, userName }
        res.json({login: true, user})
      } else {
        res.json({login: false, error: 'Invalid user name/Password'})
      }
    })
  }

  function authserver (req, res, next) {
    console.log('heres your user name', process.env.cloudant_username);
    const { userName, password } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use('users')
      db.get(userName, (err, user) => {
        if (err) {
          res.json({login: false, error: 'Invalid User name/password'})
        } else {
          bcrypt.compare(password, user.hash, (error, response) => {
            if (response) {
              const { email, userName } = user
              req.session.user = { email, userName }
              res.json({login: true, user})
            } else {
              res.json({login: false, error: 'Invalid user name/Password!'})
            }
          })
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
      if (err) throw err
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) throw error
        const user = {_id: userName, email, hash}
        addUserToCouch(user, (err, response) => {
          if (err) {
            res.json({register: false, error: err})
          } else {
            res.json({register: true, user: {_id: userName, email, hash}})
          }
        })
      })
    })
  }

  function addUserToCouch (user, cb) {
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use('users')
      db.insert(user, (err, res) => {
        cb(err, res)
      })
    })
  }

  function isGroupUnique (req, res, next) {
    const { groupName } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use('groups')
      db.get(groupName, (err, group) => {
        if (group) {
          console.log('this is group', group)
          res.json({register: false, error: 'Group Name already in use'})
        } else {
          next()
        }
      })
    })
  }

  function createGroupDB (req, res, next) {
    const { groupName } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      cloudant.db.create(groupName, function () {
        var groupDB = cloudant.db.use(groupName)
        groupDB.insert({ userName: 'Bill' }, 'admin', function (err, body, header) {
          if (err) {
            res.json({register: false, error: err.message})
          } else {
            next()
          }
        })
      })
    })
  }

  function addToGroups (req, res, next) {
    const { groupName } = req.body
    Cloudant({account: username, password: passwordC}, (error, cloudant) => {
      if (error) {
        return console.log('Failed to initialize Cloudant: ' + error.message)
      }
      var db = cloudant.db.use('groups')
      db.insert({ admin: 'Bill' }, groupName, function (err, body, header) {
        if (err) {
          res.json({register: false, error: err.message})
        } else {
          res.json({register: true, group: {name: groupName, admin: 'Bill'}})
        }
      })
    })
  }

  function sendAuth(req, res, next){
    const auth = {
      username: username,
      password: passwordC
    }
    res.json(auth)
  }

  return route
}
