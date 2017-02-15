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
      .end((err, res) => cb(err, res.body))
  },

  checkGroupUnique: function(groupName, cb) {
    request.post('api/v1/checkgroup')
      .send({groupName})
      .end((err, res) => {
        cb(err, res.body)
      })
  },

  createGroup: function (groupName, userName, groupPlan, cb) {
    request.post('api/v1/groups/create')
      .send({ groupName, userName, groupPlan })
      .end((err, res) => cb(err, res.body))
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

  getDocs: function (db, cb) {
    var db = new PouchDB(db)
    db.allDocs({include_docs: true, descending: true}, (err, docs) => {
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
        PouchDB.sync(group, groupCouch, opts)
        .on('change', info => {
          this.getDocs(group, (error, response) => cb(error, response))
        })
      })
  },

  addUserToGroup: function(userName, groupName, cb){
    request.post('api/v1/user/update')
      .send({ userName, groupName })
      .end((err, res) => cb(err, res.body))
  },

  syncBugbot: function(cb){
    var bugbot = new PouchDB('bugbot')
    request.get('api/v1/getAuth')
      .end((err, res) => {
        if(err) throw err
        const remoteBugbot = new PouchDB('https://bill-burgess.cloudant.com/bugbot', {auth: res.body})
        const opts = {
          live: false,
          retry: false
        }
        PouchDB.sync(bugbot, remoteBugbot, opts)
          .on('change', info => {
            this.getDocs('bugbot', (error, response) => cb(error, response))
          })
      })
  }
}
