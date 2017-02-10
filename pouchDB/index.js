const PouchDB = require('pouchdb')
var remoteCouch = 'https://bill-burgess.cloudant.com/users/'
var usersDB = new PouchDB('users')
const request = require('superagent')

module.exports = {

  login: function (enteredUser) {
    usersDB.get(enteredUser.email, {include_docs: true}, (err, user) => {
      if (!err) {
        console.log('trying to log in', user)
        request.post('api/v1/login/authenticate')
          .send({enteredUser, user})
          .then(res => {
            console.log(res.body)
          })
      } else {
        console.log('missed it', err)
      }
    })
  },

  register: function (newUser) {
    const { userName, email, password } = newUser
    request.post('api/v1/register/encrypt')
      .send({password})
      .then(res => {
        const user = { _id: userName, email, hash: res.body.hash }
        usersDB.put(user, (err, result) => {
          if (!err) {
            console.log('Successfully registered', result)
          } else {
            console.error(err)
          }
        })
      })
  }
}
