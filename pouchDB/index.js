const PouchDB = require('pouchdb')
const request = require('superagent')
var remoteCouch = 'https://bill-burgess.cloudant.com/users'
var usersDB = new PouchDB('users')
var groupsDB = new PouchDB('groups')
var loggedInUserDB = new PouchDB('loggedInUser')

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
              console.log(result);
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

  createGroup: function (newGroup) {
    const { groupName, groupPlan } = newGroup
    request.post('api/v1/creategroup')
    .send({ groupName })
      .then(res => {
        if (res.body.error) {
          return res.body
        } else {
          const group = { _id: groupName, groupPlan }
          groupsDB.put(group, (err, result) => {
            if (!err) {
              console.log('Your group has been added', result)
            } else {
              console.error(err)
            }
          })
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
  }
}
