const PouchDB = require('pouchdb')
const request = require('superagent')
var remoteCouch = 'https://bill-burgess.cloudant.com/users/'
var usersDB = new PouchDB('users')
var loggedInUserDB = new PouchDB('loggedInUser')

module.exports = {

  login: function (enteredUser) {
    usersDB.get(enteredUser.userName, {include_docs: true}, (err, user) => {
      if (err) {
        request.post('api/v1/login/authserver')
          .send(enteredUser)
          .then(res => {
            console.log(res.body)
          })
      } else {
        request.post('api/v1/login/authlocal')
          .send({enteredUser, user})
          .then(res => {
            console.log(res.body)
          })
      }
    })
  },

  register: function (newUser) {
    const { userName, email, password } = newUser
    request.post('api/v1/register/encrypt')
      .send({ userName, password })
      .then(res => {
        if(res.body.error){
          console.log('gets here', res.body);
          return res.body
        }else{
          const user = { _id: userName, email, hash: res.body.hash }
          usersDB.put(user, (err, result) => {
            if (!err) {
              console.log('Successfully registered', result)
            } else {
              console.error(err)
            }
          })
        }
      })
  },

  initializeUser: function (store) {
    console.log('things!');
    loggedInUserDB.get({include_docs: true}, (err, user) => {
      if(!err){
        console.log(user)
      }else{
        console.log('Error!');
      }
    })
  }
}
