module.exports = {
  authErr: null,
  error: null,
  setLocations: {
    meetingPoint: '',
    safePoint: ''
  },
  loggedIn: null,
  messages: [],
  group: {
    name: 'bugaloos',
    step: 0
  },
  planComplete: false,
  plan: {
    inventory: [
      {name: 'Torch', checked: false},
      {name: 'Radio', checked: false},
      {name: 'Warm Clothes', checked: false},
      {name: 'First Aid Kit', checked: false},
      {name: 'Snack Food', checked: false},
      {name: 'Water', checked: false}
    ]
  },
  planStepIndex: 0,
  showingComponent: 'CREATE_GROUP',
  showRegisterForm: false,
  showLoginForm: false
}
