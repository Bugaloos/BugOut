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
    step: 0,
    name: 'bugaloos',
    plan: {
      meetingPoint: '',
      safePoint: '',
      inventory: [
        {name: 'Torch', checked: false},
        {name: 'Radio', checked: false},
        {name: 'Warm Clothes', checked: false},
        {name: 'First Aid Kit', checked: false},
        {name: 'Snack Food', checked: false},
        {name: 'Water', checked: false}
      ]
    }
  },

  plan: {
    step: 0,
    meetingPoint: '',
    safePoint: '',
    inventory: [
      {name: 'Torch', checked: false},
      {name: 'Radio', checked: false},
      {name: 'Warm Clothes', checked: false},
      {name: 'First Aid Kit', checked: false},
      {name: 'Snack Food', checked: false},
      {name: 'Water', checked: false}
    ]
  },
  showingComponent: null,
  showRegisterForm: false,
  showLoginForm: false
}
