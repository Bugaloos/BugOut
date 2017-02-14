module.exports = {
  authErr: null,
  groupStepIndex: 0,
  locations: {
    meetingPoint: {lat:-41, lng:179},
    safePoint: {lat:-40, lng:179},
    cache: {lat:-41, lng:180}
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
