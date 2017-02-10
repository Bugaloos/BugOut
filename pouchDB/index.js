const PouchDB = require('pouchdb')
var remoteCouch = 'https://bill-burgess.cloudant.com/users/'
var usersDB = new PouchDB('users')
var groupsDB = new PouchDB('users')

module.exports = {

  login: function (user) {
    usersDB.get(user.email, {include_docs: true}, (err, user) => {
      if (!err) {
        console.log(user)
      } else {
        console.log('missed it', err)
      }
    })
  },

  register: function (newUser) {
    usersDB.put(newUser, (err, result) => {
      if (!err) {
        console.log('Successfully registered', result)
      } else {
        console.error(err)
      }
    })
  },

  createGroup: function (newGroup) {
    groupsDB.put(newGroup, (err, result) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Successfully added group', result)
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
  }
}
