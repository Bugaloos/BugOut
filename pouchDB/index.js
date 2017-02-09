const PouchDB = require('pouchdb')
var remoteCouch = 'https://bill-burgess.cloudant.com/users/'
var usersDB = new PouchDB('users')

module.exports = {

  login: function (user) {
    usersDB.get(user.email, {include_docs: true}, (err, user) => {
      if (!err) {
        console.log(user);
      }else{
        console.log('missed it', err);
      }
    })
  },

  register: function (newUser) {
    usersDB.put(newUser, (err, result) => {
      if (!err) {
        console.log('Successfully registered', result);
      }else{
        console.error(err)
      }
    })
  }
}
