const PouchDB = require('pouchdb')
const request = require('superagent')
<<<<<<< HEAD
var remoteCouch = 'https://bill-burgess.cloudant.com/users'
=======
>>>>>>> d8626bae684694b3533c64ae9bf39c56755df2f4
var usersDB = new PouchDB('users')
var groupsDB = new PouchDB('groups')

var username = process.env.cloudant_username || "nodejs"
var passwordC = process.env.cloudant_password

usersDB.sync(remoteCouch, {
  live:true,
  retry:false
}).on('change', function(change){
  //yoyoyoyoyoyo, whats changed???
}).on('error', function(err){
  //yoyppypypyoyp, something BROKE
})

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
          const newGroupRemoteCouch = new PouchDB(`https://bill-burgess.cloudant.com/${groupName}`, {
            auth: {
              username: username,
              password: passwordC
            }
          })
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

  postMessage: function (userName, group, message, cb) {
    var groupDB = new PouchDB(group)
    const time = new Date().toISOString()
    const entry = { _id: time, userName, text: message }
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

  syncGroup: function (group, cb) {
    var groupPouch = new PouchDB(group)
    const groupCouch = new PouchDB(`https://bill-burgess.cloudant.com/${group}`, {
      auth: {
        username: 'bill-burgess',
        password: 'Alpha3886'
      }
    })
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
  }
}
