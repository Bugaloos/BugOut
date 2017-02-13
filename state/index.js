module.exports = {
  authErr: null,
  groupStepIndex: 0,
  setLocations: {
    meetingPoint: '',
    safePoint: ''
  },
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
  },
  planStepIndex: 0,
  planComplete: false,
  showRegisterForm: false,
  showLoginForm: false,
  showCreateGroup: false,
  showCreatePlan: false,
  showJoinGroup: false

}
