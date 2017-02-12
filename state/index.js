module.exports = {
  showRegisterForm: false,
  showLoginForm: false,
  authErr: null,
  loggedIn: null,
  messages: [],
  group: 'bugaloos',
  planComplete: false,
  stepIndex: 0,
  visited: [],
  plan:{
    inventory:[
      {name: 'Torch', checked:false},
      {name: 'Radio', checked:false},
      {name: 'Warm Clothes', checked:false},
      {name: 'First Aid Kit', checked:false},
      {name: 'Snack Food', checked:false},
      {name: 'Water', checked:false}
    ]
  }
}
