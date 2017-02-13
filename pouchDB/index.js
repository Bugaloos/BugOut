const PouchDB = require('pouchdb')
const request = require('superagent')
var usersDB = new PouchDB('users')
var groupsDB = new PouchDB('groups')

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
        if (res.body.register) {
          const user = { _id: userName, email, hash: res.body.user.hash }
          usersDB.put(user, (err, result) => {
            if (!err) {
              cb(null, {register: true, user: result.id})
            } else {
              cb(null, {register: false, error: 'Service disrupted'})
            }
          })
        } else {
          cb(null, res.body)
        }
      })
  },

  createUserPlan: function(userName, plan, cb){
    request.post('api/v1/user/plan')
      .send({userName, plan})
  },

  checkGroupUnique: function(groupName, cb) {
    request.post('api/v1/checkgroup')
      .send({groupName})
      .end((err, res) => cb(err, res.body))
  },

  createGroup: function (groupName, userName, groupPlan, cb) {
    request.post('api/v1/creategroup')
      .send({ groupName, userName, groupPlan })
      .then(res => {
        if (!res.body.register) {
          cb(null, res.body)
        } else {
          var newGroupDB = new PouchDB(groupName)
          request.get('api/v1/getAuth')
            .then(response => {
              const newGroupRemoteCouch = new PouchDB(`https://bill-burgess.cloudant.com/${groupName}`, {auth: response.body})
              const opts = {
                live: true,
                retry: false
              }
              PouchDB.sync(groupName, newGroupRemoteCouch)
            })
          }
      })
  },

  postMessage: function (userName, group, message, cb) {
    var groupDB = new PouchDB(group)
    const time = new Date().toISOString()
    const entry = { _id: time, userName, text: message }
    groupDB.put(entry, (err, result) => {
      if (err) throw err
      cb(null, result)
    })
  },

  getMessages: function (group, cb) {
    var groupPV = new PouchDB(group)
    groupPV.allDocs({include_docs: true, descending: true}, (err, docs) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, docs.rows)
      }
    })
  },

  syncGroup: function (group, cb) {
    var groupPouch = new PouchDB(group)
    request.get('api/v1/getAuth')
      .then(res => {
        const groupCouch = new PouchDB(`https://bill-burgess.cloudant.com/${group}`, {auth: res.body})
        const opts = {
          live: false,
          retry: false
        }
        PouchDB.sync(group, groupCouch)
        .on('change', info => {
          this.getMessages(group, (err, response) => {
            if(err) throw err
            cb(null, group)
          })
        })
      })
  }
}
