module.exports = {
  authErr: null,
  error: null,
  planShowing: false,

  groupStepIndex: 0,
  locations: {
    meetingPoint: {lat:-41, lng:179},
    safePoint: {lat:-41, lng:180},
    cache: {lat:-41, lng:181}


  },
  loggedIn: null,
  formShowing: 'REGISTER',
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
