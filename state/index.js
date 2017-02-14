module.exports = {
  authErr: null,
  error: null,
  setLocations: {
    meetingPoint: '',
    safePoint: ''
  },
  loggedIn: null,
  messages: [],
  groupPlan: {
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
  group: {
    proposedGroupName: '',
    step: 0,
    name: 'pokefriends'
  },

  userPlan: {
    meetingPoint: '',
    safePoint: '',
    step: 0,
    inventory: [
      {name: 'Torch', checked: false},
      {name: 'Radio', checked: false},
      {name: 'Warm Clothes', checked: false},
      {name: 'First Aid Kit', checked: false},
      {name: 'Snack Food', checked: false},
      {name: 'Water', checked: false}
    ],
  },
  showingUserAdded: true,
  showingComponent: null,
  showRegisterForm: false,
  showLoginForm: false
}
