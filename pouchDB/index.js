const PouchDB = require('pouchdb')
const request = require('superagent')
var remoteCouch = 'https://bill-burgess.cloudant.com/users/_all_docs'
var usersDB = new PouchDB('users')
var groupsDB = new PouchDB('groups')
var loggedInUserDB = new PouchDB('loggedInUser')

module.exports = {

  login: function (enteredUser, cb) {
    usersDB.get(enteredUser.userName, {include_docs: true}, (err, user) => {
      if (err) {
        request.post('api/v1/login/authserver')
          .send(enteredUser)
          .then(res => {
            cb(null, res.body)
          })
          .catch(err)
      } else {
        request.post('api/v1/login/authlocal')
          .send({enteredUser, user})
          .then(res => {
            cb(null, res.body)
          })
      }
    })
  },

  register: function (newUser, cb) {
    const { userName, email } = newUser
    request.post('api/v1/register')
      .send(newUser)
      .then(res => {
        if(res.body.register){
          console.log('look here', res.body)
          const user = { _id: userName, email, hash: res.body.user.hash }
          usersDB.put(user, (err, result) => {
            if (!err) {
              cb(null, {register: true, user: result.id})
            } else {
              cb(null, {register: false, error: 'Service disrupted'})
            }
          })
        }else{
          cb(null, res.body)
        }
      })
  },

  createGroup: function (newGroup, cb) {

    const { groupName, groupPlan } = newGroup
    request.post('api/v1/creategroup')
    .send({ groupName })
      .then(res => {


        if (!res.body.register) {
          cb(null, res.body)
        } else {
          var newGroupDB = new PouchDB(groupName)
          const newGroupRemoteCouch = `https://bill-burgess.cloudant.com/${groupName}`
          const opts = {
            live: true,
            retry: false
          }
          PouchDB.sync(groupName, newGroupRemoteCouch)
        }
      })
  },

  getAGroup: function (group) {
    groupsDB.get(group._id, {include_docs: true}, (err, result) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Here are the groups', result)
      }
    })
  },

  postMessage: function (userName, group, text, cb) {
    var groupDB = new PouchDB(group)
    const time = new Date().toISOString()
    const entry = { _id: time, userName, text }
    groupDB.put(entry, (err, result) => {
      if(err) throw err
      cb(null, result)
    })
  },

  getMessages: function (group, cb) {
    var groupPV = new PouchDB(group)
    groupPV.allDocs({include_docs: true, descending: true}, (err, docs) => {
      if (err) {
        cb(err, null)
      }else{
        cb(null, docs.rows)
      }
    })
  },

  createPlan: function (plan, user, cb) {
    request.post('api/v1/createplan')
      .send({ plan, user })
  }
}
